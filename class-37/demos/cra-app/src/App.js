import './App.css';

import React, { useEffect, useRef, useState } from 'react';

import logo from './logo.svg';

const log = () => {
  console.log("Hello");
};

function App() {
  // Hooks are functions that can be used to “hook” into the React lifecycle.
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("counter updated");
    // setCounter(counter + 1);
  }, [counter]);

  const [name, setName] = useState("");
  useEffect(() => {
    console.log("name update");
  }, [name]);

  const firstMount = useRef(true);

  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
    } else {
      console.log("Skip the mount but run on every other update");
    }
  });

  const handleIncrement = () => {
    setCounter((state) => {
      return state + 1;
    });
    log();
  };

  return (
    <div className="App">
      {counter}
      <button onClick={handleIncrement}> Increment </button>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <p>{name && `Hello ${name}`}</p>
    </div>
  );
}


export default App;
