// import React from 'react'

import { useState } from "react";

const App = () => {
  const [num, setnum] = useState({ user: "Sarthak", age: 20 });

  const btnClicked = () => {
    const newNum = { ...num };
    newNum.user = "Jyotishka";
    newNum.age = "18";
    setnum(newNum);
    setnum(newNum);
  };
  return (
    <div>
      <button onClick={btnClicked}> Click </button>
      <h1>
        {num.user}, {num.age}
      </h1>
    </div>
  );
};

export default App;
