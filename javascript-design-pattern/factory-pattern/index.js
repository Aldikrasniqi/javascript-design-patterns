// basicly factory pattern is a function that returns an object
import * as books from './books.js';
const userFactory = (firstName, lastname) => ({
  id: '4521256e-9d49-481c-a3c3-dbd10d858ea7',
  firstName,
  lastname,
  fullName: `${firstName} ${lastname}`,
});
// {id: '4521256e-9d49-481c-a3c3-dbd10d858ea7', name: 'Aldi', lastname: 'Krasniqi', fullName: () => `${name} ${lastname}`}
console.log(userFactory('Aldi', 'Krasniqi'));

// avoid it if u want to create a lot of objects
// console.log(books);
// factory pattern solution for the books problem
console.log(books);