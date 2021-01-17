# Recent JS & TS tasks & questions

```
npm i  
cd ts
ts-node 01.ts
```
---

## Types in TypeScript
Type is an easy way to refer to the different properties & functions that a value has,
are used by the TypeScript Compiler to analyze code errors,
allows other developers to understand what values are in codebase

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

-   Always (to use)

**Type annotations** - Developer set the type

- When the function returns the ***any*** type & need to clarify the value
- When developer declare a variable in one line & initialize in later
- When developer want a variable to have a type that can't be inferred

