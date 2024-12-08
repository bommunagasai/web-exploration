import Highlight from "../components/atoms/Highlight";
import Typography from "../components/atoms/Typography";

const Top10Javascript = () => {
  const questionsAndAnswers = [
    {
      question: '1. What is JavaScript?',
      answer: 'JavaScript is a versatile programming language that is primarily used to create dynamic and interactive effects within web browsers. It is an essential part of modern web development along with HTML and CSS.',
      highlights: [],
    },
    {
      question: '2. What are closures in JavaScript?',
      answer: 'Closures are functions that "remember" the variables from the lexical scope in which they were created, even after that scope has finished execution. This allows functions to have private variables that can only be accessed through closure functions.',
      highlights: [
        { text: 'closures', style: { highlight: true, bold: true } },
        { text: 'private variables', style: { italic: true } },
      ],
    },
    {
      question: '3. What is the difference between `==` and `===` in JavaScript?',
      answer: 'The difference is that `==` checks for equality of values but allows for type coercion, while `===` checks for both value and type equality without coercion.',
      highlights: [
        { text: '`==`', style: { bold: true, underline: true } },
        { text: '`===`', style: { bold: true, underline: true } },
      ],
    },
    {
      question: '4. What are JavaScript Promises?',
      answer: 'A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. Promises allow for cleaner asynchronous code and avoid the "callback hell".',
      highlights: [
        { text: 'Promises', style: { highlight: true, bold: true } },
        { text: 'asynchronous operation', style: { italic: true, underline: true } },
      ],
    },
    {
      question: '5. What is the difference between `null` and `undefined`?',
      answer: 'In JavaScript, `null` is a value that explicitly indicates the absence of any object value, whereas `undefined` means a variable has been declared but has not been assigned a value yet.',
      highlights: [
        { text: '`null`', style: { underline: true } },
        { text: '`undefined`', style: { underline: true } },
      ],
    },
    {
      question: '6. What is event delegation in JavaScript?',
      answer: 'Event delegation is a technique where a single event listener is added to a parent element to handle events for child elements. It utilizes event bubbling, which allows events to propagate from the target element up to the parent.',
      highlights: [
        { text: 'event delegation', style: { highlight: true, bold: true } },
        { text: 'event bubbling', style: { italic: true } },
      ],
    },
    {
      question: '7. What is the purpose of the `this` keyword in JavaScript?',
      answer: 'The `this` keyword refers to the context in which a function is called. Its value depends on how the function is invoked, and it can refer to global objects, function objects, or class instances.',
      highlights: [
        { text: '`this` keyword', style: { highlight: true, underline: true } },
        { text: 'context', style: { bold: true } },
      ],
    },
    {
      question: '8. What are JavaScript async/await?',
      answer: 'Async/await is a syntactic sugar built on top of Promises that makes asynchronous code easier to read and write by using `async` functions and the `await` keyword for resolving Promises.',
      highlights: [
        { text: 'async/await', style: { highlight: true, bold: true } },
        { text: '`await`', style: { underline: true } },
      ],
    },
    {
      question: '9. What is the difference between `var`, `let`, and `const`?',
      answer: 'In JavaScript:\n- `var` has function-scoped or globally-scoped variables.\n- `let` has block scope and is used for variables that may change.\n- `const` is also block-scoped, but the value assigned to it cannot be reassigned.',
      highlights: [
        { text: '`var`', style: { bold: true } },
        { text: '`let`', style: { bold: true } },
        { text: '`const`', style: { bold: true } },
      ],
    },
    {
      question: '10. What is hoisting in JavaScript?',
      answer: 'Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase, before code execution. However, only the declarations are hoisted, not the initializations.',
      highlights: [
        { text: 'hoisting', style: { highlight: true, italic: true } },
        { text: 'variable and function declarations', style: { underline: true } },
      ],
    },
    // Added additional 20 questions
    {
      question: '11. What is a callback function?',
      answer: 'A callback function is a function that is passed into another function as an argument to be executed later, typically after a task or event has completed.',
      highlights: [
        { text: 'callback function', style: { highlight: true, bold: true } },
      ],
    },
    {
      question: '12. What is the difference between synchronous and asynchronous JavaScript?',
      answer: 'Synchronous code runs sequentially, blocking further execution until each operation is complete, while asynchronous code allows other operations to run while waiting for long-running tasks, such as network requests.',
      highlights: [
        { text: 'synchronous', style: { highlight: true } },
        { text: 'asynchronous', style: { highlight: true } },
      ],
    },
    {
      question: '13. What are JavaScript modules?',
      answer: 'JavaScript modules allow you to split your code into smaller, reusable pieces. They enable the import and export of functions, objects, and other data between different files.',
      highlights: [
        { text: 'modules', style: { bold: true } },
        { text: 'import and export', style: { italic: true } },
      ],
    },
    {
      question: '14. What is destructuring in JavaScript?',
      answer: 'Destructuring is a feature that allows unpacking values from arrays or properties from objects into distinct variables in a more readable way.',
      highlights: [
        { text: 'destructuring', style: { highlight: true, bold: true } },
      ],
    },
    {
      question: '15. What are arrow functions in JavaScript?',
      answer: 'Arrow functions provide a concise syntax for writing functions. They also bind the `this` value lexically, meaning that `this` inside an arrow function refers to the `this` from the surrounding context.',
      highlights: [
        { text: 'arrow functions', style: { highlight: true, bold: true } },
        { text: '`this`', style: { italic: true } },
      ],
    },
    {
      question: '16. What is event bubbling and event capturing?',
      answer: 'Event bubbling refers to the process where an event starts from the target element and bubbles up to its ancestors. Event capturing is the opposite, where the event is first captured by the outermost element and then propagates down.',
      highlights: [
        { text: 'event bubbling', style: { highlight: true, bold: true } },
        { text: 'event capturing', style: { italic: true } },
      ],
    },
    {
      question: '17. What are the differences between arrays and objects in JavaScript?',
      answer: 'Arrays are ordered collections of values indexed by numbers, whereas objects are collections of key-value pairs where the keys are usually strings or symbols.',
      highlights: [
        { text: 'arrays', style: { bold: true } },
        { text: 'objects', style: { underline: true } },
      ],
    },
    {
      question: '18. What is the spread operator in JavaScript?',
      answer: 'The spread operator (`...`) allows you to unpack elements from an array or properties from an object and insert them into another array or object.',
      highlights: [
        { text: 'spread operator', style: { highlight: true, bold: true } },
      ],
    },
    {
      question: '19. What is the `bind` method in JavaScript?',
      answer: 'The `bind` method creates a new function that, when invoked, has its `this` value set to the provided value, and prepends any given arguments to the function.',
      highlights: [
        { text: '`bind` method', style: { highlight: true, bold: true } },
        { text: '`this`', style: { italic: true } },
      ],
    },
    {
      question: '20. What are `setTimeout` and `setInterval`?',
      answer: '`setTimeout` is used to delay the execution of a function by a specified number of milliseconds, while `setInterval` runs a function repeatedly at specified intervals.',
      highlights: [
        { text: '`setTimeout`', style: { highlight: true, bold: true } },
        { text: '`setInterval`', style: { bold: true } },
      ],
    },
    {
      question: '21. What is a Promise chain?',
      answer: 'A Promise chain allows you to perform multiple asynchronous operations sequentially. The `then` method is used to chain multiple actions after the resolution of the previous Promise.',
      highlights: [
        { text: 'Promise chain', style: { highlight: true, bold: true } },
        { text: '`then` method', style: { italic: true } },
      ],
    },
    {
      question: '22. What is JSON in JavaScript?',
      answer: 'JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy to read and write for humans, and easy to parse and generate for machines. It is commonly used for data exchange between a server and a client.',
      highlights: [
        { text: 'JSON', style: { highlight: true, bold: true } },
      ],
    },
    {
      question: '23. What is the `super` keyword in JavaScript?',
      answer: 'The `super` keyword is used to call a method or constructor from a parent class in object-oriented programming.',
      highlights: [
        { text: '`super` keyword', style: { highlight: true, underline: true } },
      ],
    },
    {
      question: '24. What is the `class` keyword in JavaScript?',
      answer: 'The `class` keyword allows you to define a blueprint for creating objects with specific properties and methods in a more structured, object-oriented way.',
      highlights: [
        { text: '`class` keyword', style: { bold: true } },
      ],
    },
    {
      question: '25. What are `set` and `map` in JavaScript?',
      answer: 'A `Set` is a collection of unique values, while a `Map` is a collection of key-value pairs where both the keys and values can be any data type.',
      highlights: [
        { text: '`set`', style: { bold: true } },
        { text: '`map`', style: { bold: true } },
      ],
    },
    {
      question: '26. What is a `weakMap` and `weakSet`?',
      answer: 'A `WeakMap` and `WeakSet` are similar to `Map` and `Set`, but they hold references to objects in a "weak" way, meaning that if no other references to the object exist, it can be garbage collected.',
      highlights: [
        { text: '`weakMap`', style: { underline: true } },
        { text: '`weakSet`', style: { underline: true } },
      ],
    },
    {
      question: '27. What is the difference between `Object.freeze` and `Object.seal`?',
      answer: '`Object.freeze` makes an object immutable, preventing the addition, deletion, or modification of its properties, while `Object.seal` prevents adding or deleting properties but allows modification of existing properties.',
      highlights: [
        { text: '`Object.freeze`', style: { bold: true } },
        { text: '`Object.seal`', style: { bold: true } },
      ],
    },
    {
      question: '28. What is the purpose of the `export` keyword?',
      answer: 'The `export` keyword allows you to export functions, objects, or variables from a module so they can be imported and used in other files.',
      highlights: [
        { text: '`export` keyword', style: { highlight: true, bold: true } },
      ],
    },
    {
      question: '29. What is the event loop in JavaScript?',
      answer: 'The event loop is a mechanism that allows JavaScript to execute asynchronous code, by constantly checking the call stack and the message queue to process the next event.',
      highlights: [
        { text: 'event loop', style: { highlight: true, bold: true } },
      ],
    },
    {
      question: '30. What are the differences between `for...in` and `for...of`?',
      answer: 'The `for...in` loop iterates over the keys of an object, while the `for...of` loop iterates over the values of an iterable object like an array.',
      highlights: [
        { text: '`for...in`', style: { bold: true } },
        { text: '`for...of`', style: { bold: true } },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      {/* Title Section */}
      <Typography variant="title" className="mb-6 font-bold text-gray-800">
        Top 30 JavaScript Questions and Answers
      </Typography>

      {/* Introduction Section */}
      <Typography variant="body" className="mb-8 text-gray-800 leading-relaxed">
        In this post, we&apos;ll cover some of the most frequently asked JavaScript questions and dive deep into the answers to help you prepare for your interviews or simply learn more about the language.
      </Typography>

      {/* Questions and Answers Section */}
      {questionsAndAnswers.map((qa, idx) => (
        <div key={idx} className="mb-8 border-b-2 pb-6">
          <Typography variant="subtitle" className="font-semibold text-blue-800 mb-2">
            {qa.question}
          </Typography>
          <Typography variant="body" className="text-gray-700 leading-relaxed">
            <Highlight
              text={qa.answer}
              highlightInstructions={qa.highlights}
            />
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default Top10Javascript;
