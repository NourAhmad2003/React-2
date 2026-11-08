import "./App.css";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import "./Theme.css";

function App() {
  const [field, setField] = useState("React.js");
  const [level, setLevel] = useState("Beginner");
  const [color, setColor] = useState("red");
  const changeLevel = () => {
    setLevel("Intermediate");
  };
  const [count, setCount] = useState(0);
  // const theme ="dark";
  const [theme, setTheme] = useState("");
  return (
    <div className={`App ${theme}`}>
      <h1>vite project</h1>
      <h2> My field is {field}</h2>
      <button onClick={() => setField("Vue.js")}> Change field</button>
      <br /> <br />
      <h2> My level is {level}</h2>
      <button
        onClick={() => {
          changeLevel();
        }}
      >
        {" "}
        Change level
      </button>
      <br /> <br />
      <h2> My favorite color is {color}</h2>
      <button onClick={() => setColor("blue")}> Change color</button>
      <br /> <br />
      <button onClick={() => setCount(count + 1)}>Counter {count}</button>
      <br /> <br />
      <div>
        <button
          onClick={() => setTheme("light")}
          style={{ marginRight: "20px" }}
        >
          light
        </button>
        <button
          onClick={() => setTheme("dark")}
          style={{ marginRight: "20px" }}
        >
          dark
        </button>
        <button
          onClick={() => setTheme("pink")}
          style={{ marginRight: "20px" }}
        >
          pink
        </button>
        <button
          onClick={() => setTheme("blue")}
          style={{ marginRight: "20px" }}
        >
          blue
        </button>
      </div>
      <div>
        <button
          style={{ marginTop: "20px" }}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
}

export default App;
