import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const user = "Jyotishka";
  return (
    <>
      <Card></Card>
      {user}
      <Navbar />
    </>
  );
}

export default App;
