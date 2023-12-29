// proxy pattern is a structural design pattern that lets you provide a substitute or placeholder for another object.
// A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.
import { isValidEmail, isAllLetters } from './validator.js';

const user = {
  name: 'Joh',
  email: 'john@test.com',
  password: 'test123',
  userName: '',
  age: 20,
};

const secureUserProxy = new Proxy(user, {
  get: (target, prop) => {
    if (prop === 'password') {
      return '********';
    }

    return `${new Date().toLocaleDateString()} the value is ${target[prop]}}`
  },
  set: (target, prop, value) => {
    if (prop === 'email') {
      if (!isValidEmail(value)) {
        throw new Error('Invalid email');
      }
    }

    if (prop === 'userName') {
      if (!isAllLetters(value)) {
        throw new Error(
          'Username should only contain letters '
        );
      }else if(value.length < 5){
        throw new Error(
          'Username should be at least 5 characters long'
        );
      }
    }
    return target[prop] = value;
  },
});

// test the setter and getter
secureUserProxy.userName = 'Testing';
console.log(secureUserProxy.userName); // this should work fine because the username is valid
secureUserProxy.userName = 'Test';
console.log(secureUserProxy.userName); // this should throw an error because the username is less than 5 characters
