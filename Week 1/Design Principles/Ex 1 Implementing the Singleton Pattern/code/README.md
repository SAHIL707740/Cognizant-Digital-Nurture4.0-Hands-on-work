# Singleton Pattern - Logger Example

Step 1: Understand the Design Principle

The Singleton pattern is used when we want only one object of a class to exist in the whole program. It helps in situations like logging, where only one logger is needed. In this program, a Logger class is created in such a way that only one instance of it is ever created. This is done by keeping the constructor private and giving a static method that returns the single object. Whenever getInstance is called, it checks if the object already exists. If it does, it returns the same one. If not, it creates it first.

This way, the same logger is used everywhere in the code.

Step 4: Analysis

The Singleton pattern is useful to control object creation and save memory. It works well in a single-threaded program. But in multithreaded situations, it can fail if two threads create the object at the same time. That is why the method should be made thread-safe if used in real applications. For now, this program shows that both variables logger1 and logger2 point to the same object, which confirms the Singleton is working.
