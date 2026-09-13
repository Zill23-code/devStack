# Project Name: devStack

A simple webpage that displays various technology names with interactive functionality.

## Technologies Used

- HTML
- Tailwind CSS
- React

## Features

1. **Responsive Design:** Optimized layout for all screen sizes and devices.
2. **Eco-Friendly:** Lightweight performance optimized for modern hardware.
3. **Modern Tech Stack:** Built with contemporary front-end tools and best practices.

---

## React Concepts & Q&A

1. **What is JSX?**
   JSX is a syntax extension for JavaScript used in React to write HTML-like structures directly inside component files.

2. **Difference between Props and State:**
   Props pass read-only data into a component from the outside, while state manages dynamic data locally inside the component.

3. **What does `useState` do?**
   The `useState` hook stores and updates dynamic data locally within a component, triggering a re-render when state changes.

4. **What does `useEffect` do?**
   The `useEffect` hook handles side effects in functional components (such as fetching external JSON data or setting up subscriptions).

5. **Why are unique `key` props required in lists?**
   React uses unique keys in `.map()` lists to track individual elements efficiently, updating only the changed items in the real DOM.

6. **What is Conditional Rendering?**
   Conditional rendering displays different UI elements or components based on specific conditions (such as state values, boolean flags, or available data).

7. **How does data move between components?**
   Data flow is unidirectional: a parent passes data down to a child component via props, and a child sends data back up to the parent using callback functions.
