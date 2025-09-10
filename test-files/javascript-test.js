// JavaScript semantic highlighting test file

/**
 * Class demonstration with modern JavaScript features
 */
class EventEmitter {
  #listeners = new Map();
  
  constructor() {
    this.maxListeners = 10;
  }
  
  on(event, listener) {
    if (!this.#listeners.has(event)) {
      this.#listeners.set(event, []);
    }
    
    const listeners = this.#listeners.get(event);
    if (listeners.length >= this.maxListeners) {
      console.warn(`Max listeners exceeded for event: ${event}`);
    }
    
    listeners.push(listener);
    return this;
  }
  
  emit(event, ...args) {
    const listeners = this.#listeners.get(event) || [];
    listeners.forEach(listener => {
      try {
        listener.apply(this, args);
      } catch (error) {
        console.error('Listener error:', error);
      }
    });
    return listeners.length > 0;
  }
  
  off(event, listener) {
    const listeners = this.#listeners.get(event);
    if (!listeners) return this;
    
    const index = listeners.indexOf(listener);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
    
    return this;
  }
  
  static create() {
    return new EventEmitter();
  }
}

// Function declarations and expressions
function createUser(name, email) {
  return {
    name,
    email,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date(),
    
    getName() {
      return this.name;
    },
    
    setName(newName) {
      this.name = newName;
    }
  };
}

// Arrow functions and async/await
const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`/api/users/${userId}`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
};

// Destructuring and spread operator
const processUserData = ({ name, email, ...otherProps }) => {
  const processedUser = {
    displayName: name.toUpperCase(),
    emailDomain: email.split('@')[1],
    ...otherProps
  };
  
  return processedUser;
};

// Template literals and tagged templates
const html = (strings, ...values) => {
  return strings.reduce((result, string, i) => {
    return result + string + (values[i] || '');
  }, '');
};

const userTemplate = (user) => html`
  <div class="user-card">
    <h3>${user.name}</h3>
    <p>Email: ${user.email}</p>
    <p>ID: ${user.id}</p>
  </div>
`;

// Generators and iterators
function* userGenerator(users) {
  for (const user of users) {
    if (user.isActive) {
      yield user;
    }
  }
}

// Promises and chaining
const userService = {
  users: [],
  
  addUser(user) {
    return new Promise((resolve, reject) => {
      if (!user.name || !user.email) {
        reject(new Error('Name and email are required'));
        return;
      }
      
      this.users.push(user);
      resolve(user);
    });
  },
  
  getUsers() {
    return Promise.resolve([...this.users]);
  },
  
  findUser(predicate) {
    return this.getUsers()
      .then(users => users.find(predicate))
      .catch(error => {
        console.error('Error finding user:', error);
        return null;
      });
  }
};

// Module pattern and closures
const UserModule = (() => {
  let privateCounter = 0;
  const privateUsers = [];
  
  return {
    addUser(user) {
      privateUsers.push({ ...user, id: ++privateCounter });
    },
    
    getUsers() {
      return [...privateUsers];
    },
    
    getUserCount() {
      return privateCounter;
    }
  };
})();

// Regular expressions and string methods
const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const formatPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  
  return phone;
};

// Event handling and DOM manipulation (if in browser)
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('user-form');
    
    if (userForm) {
      userForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const userData = Object.fromEntries(formData.entries());
        
        try {
          await userService.addUser(userData);
          console.log('User added successfully');
        } catch (error) {
          console.error('Failed to add user:', error);
        }
      });
    }
  });
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    EventEmitter,
    createUser,
    fetchUserData,
    userService,
    UserModule,
    validateEmail,
    formatPhoneNumber
  };
}