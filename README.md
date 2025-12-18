# Assignment

Read and write a summary of the following;

1. Intro to React
2. React Hooks
3. HTML DOM Document
4. HTML DOM elements

## 1. Intro to React (ReactJS)

React is a JavaScript library used for building user interfaces (UI). Think of it like building with **Lego blocks**. Instead of carving a statue from one big rock, you build small pieces (Components) like a hand, a head, or a leg, and snap them together. If you need to change the hand, you just swap that piece without breaking the rest of the statue.


## React Hooks

- Hooks let you "hook into" React features like state and lifecycle without writing a class.
- Common Hooks:
  - `useState` → track and update component state.
  - `useEffect` → run code when something changes (like componentDidMount, DidUpdate, etc.).
  - `useRef` → access DOM elements or keep values between renders.
  - `useContext` → share data across components without props drilling.
- Hooks must always be called at the top of a component, not inside loops or conditions.

## ReactJS

- React is a library to build UI with components.
- Components can be **functional** (modern) or **class-based** (older).
- JSX is like HTML in JavaScript—React uses it to describe UI.
- React updates the UI efficiently with a Virtual DOM.

## JavaScript DOM (Document Object Model)

- DOM is how JavaScript sees and interacts with HTML.
- The DOM is a tree of nodes: **document → elements → children**.
- You can read, change, add, or remove elements using JS.

### Key DOM Documents & Elements

- `document` → entry point to the DOM.
- `document.getElementById('id')` → grab an element by ID.
- `document.querySelector('.class')` → grab first element matching selector.
- `document.querySelectorAll('.class')` → grab all matching elements.
- `element.innerHTML` → get or set content inside an element.
- `element.style` → change CSS directly.
- `element.addEventListener('click', fn)` → run code on events.
- `element.appendChild(newEl)` → add elements dynamically.

## Quick Notes

- DOM changes are live—update the DOM, the page changes immediately.
- React turns DOM manipulation into something abstract, use state & props instead of manual DOM changes for UI.
- Hooks make functional components powerful without classes.
