// var PI = 3.14;
// PI = 42; // stop me from doing this!

/* Write an ES2015 Version */
let  PI = 3.14;
PI = 42;

/**
 * What is the difference between var and let?
 *
 * var is function-scoped, meaning its scope is limited to the function within which it is declared. If it is declared outside of a function, it is globally scoped.
let is block-scoped, meaning its scope is limited to the block (denoted by curly braces {}) in which it is declared. This makes let more useful in for loops, if statements, and other block structures.
 * 
 * What is the difference between var and const?
 * 
 * var: Variables declared with var are mutable, meaning their values can be changed throughout the script.
const: Variables declared with const are immutable, meaning once they are assigned a value, it cannot be changed. Attempting to reassign a const variable will result in a runtime error.
* 
* What is the difference between let and const?
* 
* let: Allows you to declare variables that can be reassigned or changed later in the program. It's typically used for variables whose value is expected to change.
const: Used to declare variables with a constant value, which means once a value has been assigned to a const variable, it cannot be changed or reassigned. If you try to reassign a const variable, it will result in a runtime error.
*
* What is hoisting?
*
*Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope during the compile phase before the code has been executed. 
*
**/