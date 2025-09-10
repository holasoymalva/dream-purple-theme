#!/usr/bin/env python3
"""
Python semantic highlighting test file
Demonstrates various Python language features for semantic token testing
"""

import asyncio
import json
from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from enum import Enum, auto
from typing import Dict, List, Optional, Union, Generic, TypeVar, Protocol
from functools import wraps, lru_cache
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Type variables and protocols
T = TypeVar('T')
U = TypeVar('U', bound='BaseEntity')

class Serializable(Protocol):
    """Protocol for serializable objects"""
    def to_dict(self) -> Dict[str, any]:
        ...

# Enums
class UserRole(Enum):
    """User role enumeration"""
    ADMIN = auto()
    USER = auto()
    MODERATOR = auto()
    GUEST = auto()

class Status(Enum):
    """Status enumeration with string values"""
    ACTIVE = "active"
    INACTIVE = "inactive"
    PENDING = "pending"
    SUSPENDED = "suspended"

# Dataclasses
@dataclass
class Address:
    """Address dataclass with validation"""
    street: str
    city: str
    state: str
    zip_code: str
    country: str = "USA"
    
    def __post_init__(self):
        if len(self.zip_code) != 5:
            raise ValueError("ZIP code must be 5 digits")

@dataclass
class UserProfile:
    """User profile with default factory"""
    user_id: int
    username: str
    email: str
    roles: List[UserRole] = field(default_factory=list)
    metadata: Dict[str, any] = field(default_factory=dict)
    address: Optional[Address] = None
    
    @property
    def is_admin(self) -> bool:
        return UserRole.ADMIN in self.roles
    
    @property
    def display_name(self) -> str:
        return self.metadata.get('display_name', self.username)

# Abstract base classes
class BaseEntity(ABC):
    """Abstract base entity class"""
    
    def __init__(self, entity_id: int):
        self._id = entity_id
        self._created_at = asyncio.get_event_loop().time()
    
    @property
    def id(self) -> int:
        return self._id
    
    @property
    def created_at(self) -> float:
        return self._created_at
    
    @abstractmethod
    def validate(self) -> bool:
        """Validate the entity"""
        pass
    
    @abstractmethod
    def to_dict(self) -> Dict[str, any]:
        """Convert entity to dictionary"""
        pass

# Decorators
def deprecated(func):
    """Decorator to mark functions as deprecated"""
    @wraps(func)
    def wrapper(*args, **kwargs):
        logger.warning(f"Function {func.__name__} is deprecated")
        return func(*args, **kwargs)
    return wrapper

def retry(max_attempts: int = 3):
    """Retry decorator with configurable attempts"""
    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return await func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts - 1:
                        raise
                    logger.warning(f"Attempt {attempt + 1} failed: {e}")
                    await asyncio.sleep(2 ** attempt)
        return wrapper
    return decorator

# Generic classes
class Repository(Generic[T]):
    """Generic repository class"""
    
    def __init__(self):
        self._items: List[T] = []
    
    def add(self, item: T) -> None:
        """Add item to repository"""
        self._items.append(item)
    
    def find_by_id(self, item_id: int) -> Optional[T]:
        """Find item by ID"""
        for item in self._items:
            if hasattr(item, 'id') and item.id == item_id:
                return item
        return None
    
    def get_all(self) -> List[T]:
        """Get all items"""
        return self._items.copy()
    
    def filter(self, predicate) -> List[T]:
        """Filter items by predicate"""
        return [item for item in self._items if predicate(item)]

# Concrete implementation
class User(BaseEntity):
    """User entity implementation"""
    
    def __init__(self, user_id: int, username: str, email: str):
        super().__init__(user_id)
        self.username = username
        self.email = email
        self.profile: Optional[UserProfile] = None
        self._status = Status.PENDING
    
    @property
    def status(self) -> Status:
        return self._status
    
    @status.setter
    def status(self, value: Status) -> None:
        if not isinstance(value, Status):
            raise TypeError("Status must be a Status enum value")
        self._status = value
    
    def validate(self) -> bool:
        """Validate user data"""
        if not self.username or len(self.username) < 3:
            return False
        if '@' not in self.email:
            return False
        return True
    
    def to_dict(self) -> Dict[str, any]:
        """Convert user to dictionary"""
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'status': self.status.value,
            'created_at': self.created_at,
            'profile': self.profile.to_dict() if self.profile else None
        }
    
    @deprecated
    def old_method(self) -> str:
        """This method is deprecated"""
        return "This is an old method"
    
    @staticmethod
    def create_guest_user() -> 'User':
        """Create a guest user"""
        user = User(0, "guest", "guest@example.com")
        user.status = Status.ACTIVE
        return user
    
    @classmethod
    def from_dict(cls, data: Dict[str, any]) -> 'User':
        """Create user from dictionary"""
        user = cls(data['id'], data['username'], data['email'])
        if 'status' in data:
            user.status = Status(data['status'])
        return user

# Service classes with async methods
class UserService:
    """User service with async operations"""
    
    def __init__(self):
        self._repository: Repository[User] = Repository()
        self._cache: Dict[int, User] = {}
    
    async def create_user(self, username: str, email: str) -> User:
        """Create a new user asynchronously"""
        user_id = len(self._repository.get_all()) + 1
        user = User(user_id, username, email)
        
        if not user.validate():
            raise ValueError("Invalid user data")
        
        self._repository.add(user)
        self._cache[user.id] = user
        
        logger.info(f"Created user: {username}")
        return user
    
    @retry(max_attempts=3)
    async def fetch_user_data(self, user_id: int) -> Optional[Dict[str, any]]:
        """Fetch user data with retry logic"""
        # Simulate API call
        await asyncio.sleep(0.1)
        
        user = self._repository.find_by_id(user_id)
        if user:
            return user.to_dict()
        return None
    
    @lru_cache(maxsize=128)
    def get_user_by_email(self, email: str) -> Optional[User]:
        """Get user by email with caching"""
        users = self._repository.get_all()
        for user in users:
            if user.email == email:
                return user
        return None
    
    async def batch_process_users(self, user_data: List[Dict[str, any]]) -> List[User]:
        """Process multiple users concurrently"""
        tasks = []
        for data in user_data:
            task = self.create_user(data['username'], data['email'])
            tasks.append(task)
        
        return await asyncio.gather(*tasks, return_exceptions=True)

# Context managers
class DatabaseConnection:
    """Database connection context manager"""
    
    def __init__(self, connection_string: str):
        self.connection_string = connection_string
        self.connection = None
    
    def __enter__(self):
        logger.info(f"Connecting to database: {self.connection_string}")
        # Simulate connection
        self.connection = {"connected": True}
        return self.connection
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        logger.info("Closing database connection")
        self.connection = None
        if exc_type:
            logger.error(f"Exception occurred: {exc_val}")
        return False

# Generators and iterators
def fibonacci_generator(n: int):
    """Generate Fibonacci sequence up to n terms"""
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

def process_users_in_batches(users: List[User], batch_size: int = 10):
    """Process users in batches using generator"""
    for i in range(0, len(users), batch_size):
        batch = users[i:i + batch_size]
        yield batch

# Exception handling
class UserNotFoundError(Exception):
    """Custom exception for user not found"""
    
    def __init__(self, user_id: int):
        self.user_id = user_id
        super().__init__(f"User with ID {user_id} not found")

class ValidationError(Exception):
    """Custom exception for validation errors"""
    pass

# Main execution
async def main():
    """Main function demonstrating async operations"""
    service = UserService()
    
    try:
        # Create some users
        user1 = await service.create_user("alice", "alice@example.com")
        user2 = await service.create_user("bob", "bob@example.com")
        
        # Batch processing
        user_data = [
            {"username": "charlie", "email": "charlie@example.com"},
            {"username": "diana", "email": "diana@example.com"}
        ]
        
        batch_results = await service.batch_process_users(user_data)
        
        # Use context manager
        with DatabaseConnection("postgresql://localhost:5432/testdb") as conn:
            logger.info(f"Connection status: {conn['connected']}")
        
        # Generator usage
        fib_numbers = list(fibonacci_generator(10))
        logger.info(f"Fibonacci numbers: {fib_numbers}")
        
    except (UserNotFoundError, ValidationError) as e:
        logger.error(f"User operation failed: {e}")
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
    finally:
        logger.info("Main execution completed")

if __name__ == "__main__":
    # Run the async main function
    asyncio.run(main())