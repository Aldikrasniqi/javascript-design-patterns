# JavaScript Design Patterns Repository

Welcome to the JavaScript Design Patterns Repository! This repository is a collection of commonly used design patterns in JavaScript to help developers understand and implement efficient and scalable solutions in their projects.

## Table of Contents

- [Introduction](#introduction)
- [Design Patterns](#design-patterns)
- [How to Use](#how-to-use)

## Introduction

Design patterns are proven solutions to recurring problems in software design. They provide a template for solving specific issues, making the development process more efficient and maintainable. This repository aims to showcase various design patterns in JavaScript and provide examples to illustrate their usage.

## Design Patterns

1. **Singleton Pattern**
   - Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.
   - In my case in my case im using the singleton pattern to create a connection to the database.

2. **Factory Pattern**
   - Factory is a design pattern that that help us to create objects dynamically.
   - In our case we have a books.js file where is a problem in it.

3. **Observer Pattern**
   - The Observer is a design pattern in which an object maintains a list of objects depending on it which i call ovservers, automatically notifying them of any changes to state.
   - Example of implementatin is a subscription model in which objects subscribe to an event and get notified when the event occurs.

4. **Module Pattern**
   - Modular code is a design pattern that separates functionality into independent, interchangeable modules, each with a well-defined purpose.
   - The implementation is defined in 2 parts which are modular by node.js, where the logic is defined in one file and the implementation is defined in another file.
     
5. **Proxy Pattern**
   - Proxy pattern is a structural design pattern that lets you provide a substitute or placeholder for another object.
   - In our case we are using a proxy to validate the user input before we set it to the user object
    
5. **Prototype Pattern**
   - Prototype pattern is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.
   - In our case we are using the prototype pattern to create a new user object from an existing user object.

## How to Use

Each design pattern is organized in its own directory within the repository. Inside each directory, you will find a commented code with detailed explanations of the design pattern, its use cases, and a working example in JavaScript. Follow the instructions in each file to understand and implement the design patterns in your projects.

To get started, clone the repository:

```bash
git clone https://github.com/Aldikrasniqi/javascript-design-patterns.git
