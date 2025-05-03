# React: useReducer and State Lifting Concepts

This document outlines two important state management approaches in React:

1. **State Lifting**
2. **useReducer Hook**

---

## 📌 1. State Lifting

**Definition:**  
State lifting involves moving state up to the nearest common ancestor component so that multiple child components can access and manipulate it via props.

### ✅ Advantages:

- Simple to implement for small components.
- Encourages better component structure and reusability.
- Makes shared state predictable and centralized.

### ❌ Disadvantages:

- Can lead to **prop drilling** (passing props through many levels).
- Becomes harder to manage as the application grows.
- Not ideal for deeply nested or complex state logic.

---

## 📌 2. useReducer Hook

**Definition:**  
The `useReducer` hook is an alternative to `useState` that is suited for managing more complex state logic using a reducer function (similar to Redux pattern).

### ✅ Advantages:

- Better for **complex state logic** (e.g. multiple sub-values or conditional updates).
- Keeps state transitions organized and predictable.
- Makes it easier to debug and test state updates.

### ❌ Disadvantages:

- More boilerplate than `useState` for simple cases.
- Requires understanding of reducer patterns (actions, types, immutability).
- Can be overkill for small or straightforward state needs.
