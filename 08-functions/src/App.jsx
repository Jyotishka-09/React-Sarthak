// import './App.css'
const App = () => {
  function inputChanging(value) {
    console.log(value);
  }
  return (
    <div>
      App
      <button
        onClick={function () {
          console.log("Btton is clicked");
        }}
      >
        Change , user
      </button>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={function (elem) {
          inputChanging(elem.target.value);
        }}
      />

      <div className="Box" onMouseMove={()=>{
        console.log('Nachooo')
      }}></div>
      
    </div>
  );
};

export default App;
