// import React from 'react'

import { useState } from "react";

const App = () => {
  // const [first, setfirst] = useState(second)
  const [num, setnum] = useState(0);
  function increaseNum() {
    setnum(num + 1);
  }

  function decreaseNum() {
    setnum(num - 1);
  }

  function jum5Num() {
    setnum(num + 5);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jum5Num}>Increase by 5</button>
    </div>
  );
};

export default App;
