// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TechBar from "./components/TechBar";

function App() {
  return (
    <>
      <Navbar title="TextConvertor" home="Home" />
      <div className="container">
        <TechBar head="Text to Upper and Lower Case" />
      </div>
    </>
  );
}

export default App;
