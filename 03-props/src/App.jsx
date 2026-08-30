// import React from 'react'

import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card user = "Raghav Garg" age ={18}></Card>
      <Card user = "Alakh" age ={18} img ="https://images.pexels.com/photos/31284696/pexels-photo-31284696.jpeg?cs=srgb&dl=pexels-optical-chemist-340351297-31284696.jpg&fm=jpg"></Card>
    </div>
  );
};

export default App;
