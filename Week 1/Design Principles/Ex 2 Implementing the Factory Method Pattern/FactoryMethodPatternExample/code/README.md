Week 1 - SOLID Principles  
Exercise 2: Implementing the Factory Method Pattern

Factory Method Pattern:

The Factory Method Pattern is a creational design pattern used to create objects without specifying the exact class of object that will be created.

In simple terms, the Factory Method Pattern is a way to create objects in Java without using the exact class name directly. It lets a class decide at runtime which object to create, making the code more flexible.

Concept:

Object Creation via Method:  
Objects are not created using the new keyword in the main code. Instead, a method is used to return the correct object type.

Common Interface or Superclass:  
All objects created by the factory follow a common interface or superclass. This allows the main code to use the objects without knowing their exact types.

Loose Coupling:  
The main code is not directly linked to specific classes. This makes the system easier to maintain and extend in the future.

Problem:  
Each type of document needs to be opened and processed in its own way.
To avoid writing if-else or switch-case logic and to follow good design practices, the Factory Method Pattern is used. Each type of document has its own factory class that creates the object, and the main code simply calls the factory method. This keeps the code clean, flexible, and easy to update later.
