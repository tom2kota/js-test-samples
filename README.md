# Recent JS + TS tasks & questions

Code samples - copy/paste to

- [Typescript Playground](https://www.typescriptlang.org/play)
- [JS / TS Playground](https://jsfiddle.net)

------

Download & Install [Node.js](https://nodejs.org/)

Run in terminal

```
npm i  
cd ts
ts-node 01.ts
```

---

## Types in TypeScript

Type is an easy way to refer to the different properties & functions that a value has, are used by the TypeScript
Compiler to analyze code errors, allows other developers to understand what values are in codebase

**Primitive types:**

    - number 
    - BigInt
    - string
    - symbol
    - undefined
    - null
    - void

**Object types:**

    - array
    - object (new Date, interface {}, {}, [])
    - function
    - class

----

## Type annotations vs Type inference

**Type inference** - TypeScript guesses the type

- Always (to use)

**Type annotations** - Developer set the type

- When the function returns the ***any*** type & need to clarify the value
- When developer declare a variable in one line & initialize in later
- When developer want a variable to have a type that can't be inferred

---

## Modifiers (restrict access to some functions / variables)

- **public**(default) - this method can be called anywhere & anytime
- **private** - this method can ONLY be called by other methods in this CLASS (restrict call from other methods)
- **protected** - this method can be called by other methods in this CLASS, or by other methods in CHILD CLASSES

---

# P.S.

## Online Diagram Software

[https://app.diagrams.net](https://app.diagrams.net)
