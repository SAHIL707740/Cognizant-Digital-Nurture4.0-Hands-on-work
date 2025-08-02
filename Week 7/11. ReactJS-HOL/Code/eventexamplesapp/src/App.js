import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const sayHello = () => {
    console.log("Hello! Count increased");
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const handleMultiple = () => {
    increment();
    sayHello();
  };

  const handleWelcome = (message) => {
    alert(`You said: ${message}`);
  };

  const handleSynthetic = (event) => {
    console.log("Synthetic Event:", event);
    alert("I was clicked");
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>React Event Examples</h1>
      <h2>Counter: {count}</h2>

      <button onClick={handleMultiple}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: '10px' }}>Decrement</button>

      <br /><br />
      <button onClick={() => handleWelcome("welcome")}>Say Welcome</button>

      <br /><br />
      <button onClick={handleSynthetic}>Synthetic Event OnPress</button>

      <br /><br />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
