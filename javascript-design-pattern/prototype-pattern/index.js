// prototype pattern is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.
// example 1
class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
  start() {
    console.log('Car starting');
  }
  drive() {
    console.log('Car driving');
  }
  break() {
    console.log('Car breaking');
  }
}
const car1 = new Car(4, 'V6', 'red');
const car2 = new Car(2, 'V8', 'blue');
const car3 = new Car(3, 'V12', 'green');

class createUser {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  checkLastOnline() {
    console.log(`${this.name} was last online 2 hours ago`);
  }
  checkEmail() {
    console.log(`${this.name} is using ${this.email}`);
  }
  deleteUser() {
    console.log(`${this.name} has been deleted`);
  }
}
const user = new createUser({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
});

const user2 = new createUser({
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@doe.com',
});

console.log(user.deleteUser === user2.deleteUser); // true