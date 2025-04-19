# 🚀 React Hooks Basics – useState & useEffect

 the use of **React Hooks**, specifically `useState` and `useEffect`, which are fundamental for managing state and side effects in React functional components.

---

## 📌 What is `useState`?

`useState` is a Hook that allows you to have state variables in functional components. Before Hooks, state could only be used in class components.

###  Syntax

```js
const [state, setState] = useState(initialValue);
```
- state: the current state value.
- setState: a function to update the state.
- initialValue: the default value of the state.

#### Example: Counter Component
```js
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

- useState(0) initializes count with the value 0.
- When the button is clicked, setCount updates the value of count.
- The component re-renders every time the state changes.

### What is useEffect?
useEffect is a Hook that allows you to perform side effects in function components. Side effects can include:

- Fetching data
- Subscribing to events
- Updating the DOM
- Setting up timers

### syntax 
```js
useEffect(() => {
  // Your side effect logic here
}, [dependencies]);
```
- The function inside useEffect runs after the component renders.

- The second argument [dependencies] controls when the effect runs.

#### Example 1:
```js
useEffect(() => {
  console.log("Component mounted!");
}, []);
```
- An empty dependency array ([]) means this effect runs only once, when the component first mounts.

#### Example 2: Data Fetching on Mount
```js
import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```
-  This effect fetches user data only once when the component is mounted.

- setUsers(data) updates the state, which triggers a re-render.



