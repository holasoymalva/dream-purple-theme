// TypeScript semantic highlighting test file
import { Component, Injectable, Decorator } from '@angular/core';

/**
 * Documentation comment for interface
 */
interface UserInterface {
  readonly id: number;
  name: string;
  email?: string;
  isActive: boolean;
}

/**
 * Abstract base class for demonstration
 */
abstract class BaseEntity {
  protected static instanceCount: number = 0;
  
  constructor(public readonly id: number) {
    BaseEntity.instanceCount++;
  }
  
  abstract getName(): string;
  
  @deprecated
  oldMethod(): void {
    console.log('This method is deprecated');
  }
}

/**
 * User class implementing UserInterface
 */
class User extends BaseEntity implements UserInterface {
  private _name: string;
  
  constructor(
    id: number,
    name: string,
    public email?: string,
    public isActive: boolean = true
  ) {
    super(id);
    this._name = name;
  }
  
  get name(): string {
    return this._name;
  }
  
  set name(value: string) {
    this._name = value;
  }
  
  getName(): string {
    return this.name;
  }
  
  async fetchUserData(): Promise<UserInterface> {
    const response = await fetch(`/api/users/${this.id}`);
    return response.json();
  }
  
  static createUser(data: Partial<UserInterface>): User {
    return new User(
      data.id || 0,
      data.name || 'Unknown',
      data.email,
      data.isActive
    );
  }
}

// Enum demonstration
enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  MODERATOR = 'moderator'
}

// Type alias and generic types
type UserWithRole<T extends UserRole> = User & {
  role: T;
  permissions: string[];
};

// Namespace demonstration
namespace UserUtils {
  export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  export const DEFAULT_PERMISSIONS = ['read'];
}

// Function with generics and decorators
@Injectable()
class UserService<T extends UserInterface> {
  private users: T[] = [];
  
  constructor(private readonly apiUrl: string) {}
  
  addUser(user: T): void {
    this.users.push(user);
  }
  
  findUser(predicate: (user: T) => boolean): T | undefined {
    return this.users.find(predicate);
  }
  
  async saveUser(user: T): Promise<void> {
    try {
      await fetch(`${this.apiUrl}/users`, {
        method: 'POST',
        body: JSON.stringify(user)
      });
    } catch (error) {
      console.error('Failed to save user:', error);
    }
  }
}

// Module and export demonstration
export { User, UserInterface, UserRole, UserService };
export default UserUtils;

// Arrow functions and modern syntax
const processUsers = (users: User[]): UserWithRole<UserRole>[] => {
  return users
    .filter(user => user.isActive)
    .map(user => ({
      ...user,
      role: UserRole.USER,
      permissions: UserUtils.DEFAULT_PERMISSIONS
    }));
};

// Destructuring and template literals
const { name, email = 'no-email@example.com' } = new User(1, 'John Doe');
console.log(`User: ${name}, Email: ${email}`);