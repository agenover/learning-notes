## Intro to [Objects](https://www.linkedin.com/learning/javascript-essential-training/objects-a-practical-introduction?autoSkip=true&autoplay=true&contextUrn=urn%3Ali%3AlearningCollection%3A6980832127944638464&resume=false&u=36053556)

- Properties define objects
- JS is a prototype object oriented language, meaning each object is a unique instance of an object prototype

    Changing the property values can create a new object

- Methods are property changing features inside objects, they only act on a particular object
- Methods are functions inside objects
- Objects can contain other objects
- JavaScript objects are collections of data and functionality stored as properties and methods that describe the object and what it can do.

<br>

## Access property objects

- Dot notation: `console.log(object.propertyKey)`
- Bracket notation: `console.log("lid value:", object[propertyKey]);`

<br>

## Classes: Object blueprint (or templates)

Classes work as templates for an object type. And anytime we create a new object based on a class, that object automatically gets all the properties and the methods from that class. That means we can change the properties of the class or the methods of the class. And those changes apply to every single instance of that class that we've created.

A class name always starts with a capital letter

Creating classes (they both do the same, it is just preference):

Class declaration: class Name {}
Class expression: const Name = class {}

[Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) to classes in MDN plus

<br>

## Object constructors

The difference between the class and the object constructor function here is the methods live inside the main construction function, just like the properties do.

Classes are currently the new and preferred way

[Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) to MDN
