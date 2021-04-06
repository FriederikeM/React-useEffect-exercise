import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Your code below

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    document.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <p>Window Width: {windowWidth} </p>
    </div>
  );
}

export default App;
