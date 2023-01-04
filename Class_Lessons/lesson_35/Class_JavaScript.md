# Introduction to Classes

In JavaScript, a class is a template for creating objects. It is a way of defining the structure and behavior of an object in a single place.

Classes were introduced in JavaScript with the release of ECMAScript 2015 (also known as ES6). Prior to that, JavaScript used prototype-based inheritance, which is a different way of creating objects and defining their behavior.
Declaring a Class

### Here is the syntax for declaring a class in JavaScript:

```js
class ClassName {
  // class body
}
```

For example, here is a class for creating a person:

```js
class Person {
  // class body
}
```

### The class body can contain two types of members:

  <u>Properties</u>: These are variables that belong to the class and store its state.

  <u>Methods</u>: These are functions that belong to the class and define its behavior.

### Adding Properties and Methods

To add a property or method to a class, you use the this keyword followed by the name of the property or method. Here is an example:

```js
class Person {
  // property
  name = 'John';

  // method
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
```

In this example, the Person class has a property called name and a method called greet.
Creating Objects from a Class

To create an object from a class, you use the new keyword followed by the name of the class. Here is an example:

```js
const person = new Person();
```
This creates a new object called person that is an instance of the Person class.

You can access the properties and methods of the object using the dot notation. For example:

```js
console.log(person.name); // prints 'John'
person.greet(); // prints 'Hello, my name is John'
```

### Constructor Method

A class can have a special method called a constructor. The constructor is a method that is called when an object is created from the class.

Here is an example of a class with a constructor:
```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
```
To create an object from this class, you need to pass a value for the name parameter to the constructor:

```js
const person = new Person('Jane');
person.greet(); // prints 'Hello, my name is Jane'
```

## Inheritance

Inheritance is a way for one class to inherit the properties and methods of another class. In JavaScript, a class can inherit from another class by using the extends keyword.

Here is an example of a class that inherits from another class:
```js
class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }

  getGrade() {
    console.log(`${this.name} is in grade ${this.grade}`);
 ```