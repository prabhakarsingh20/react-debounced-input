# React Debounce Custom Hook

A simple React 19 + Vite project demonstrating how to create and use a reusable custom debounce hook.

## Features

- Custom React Hook
- Debounce functionality
- Optimized input handling
- useEffect cleanup
- React Hooks practice

---

## Project Structure

```bash
src/
 ├── App.jsx
 ├── useDebounce.jsx
```

---

## useDebounce Hook

```js
import { useState, useEffect } from "react";

export default function useDebounce(inputValue, delay = 3000) {
  const [debounceValue, setDebounceValue] = useState(inputValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(inputValue);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, delay]);

  return debounceValue;
}
```

---

## App Component

```js
import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

function App() {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value);

  const handeChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log(debounceValue);
  }, [debounceValue]);

  return (
    <>
      <div className="App">
        <input value={value} onChange={handeChange} />
        <br />
        <br />

        <h2>Typing Value: {value}</h2>
        <br />
        <br />
        <h2>Debounced Value: {debounceValue}</h2>
      </div>
    </>
  );
}

export default App;
```

---

## How Debounce Works

- User types in input field
- Timer starts
- If user types again before delay:
  - previous timer clears
  - new timer starts
- Final value updates after delay

---

## Real World Use Cases

- Search inputs
- API optimization
- Auto complete
- Filtering large data
- Reducing unnecessary API calls

---

## Concepts Used

- useState
- useEffect
- Custom Hooks
- Cleanup Function
- Dependency Array
- Debouncing

---

## Run Project

```bash
npm install
npm run dev
```

---

## Tech Stack

- React 19
- Vite
- JavaScript
