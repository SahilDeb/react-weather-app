import React, { useEffect } from "react";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  useEffect(() => {
    document.title = "Weather app"
 }, []);

  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
