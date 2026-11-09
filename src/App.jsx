import "./App.css";
import { useReducer } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import "./Theme.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Data from "./context/Data";

function App() {
  const { failed, changeField, level, color, counter, theme, dispatch } = useContext(Data);
  return (
    <div className={`App ${theme}`}>
      <h1>vite project</h1>
      <h2> My field is {failed} </h2>
      <button onClick={() => {changeField()}}>
        Change field
      </button>
      <br /> <br />
      <h2> I am a {level}</h2>
      <button
        onClick={() => { dispatch({ type: "CHANGE_LEVEL", newValue: "intermediate" }) }}
      >
        Change level{" "}
      </button>
      <br /> <br />
      <h2> My favorite color is {color} </h2>
      <button
        onClick={() => { dispatch({ type: "CHANGE_COLOR", newValue: "blue" }) }}
      >
        {" "}
        Change color
      </button>
      <br /> <br />
      <button
        onClick={() => { dispatch({ type: "INCREASE" }) }}
      >
        Counter {counter}{" "}
      </button>
      <br /> <br />
      <div>
        <button
          style={{ marginRight: "20px" }}
          onClick={() => { dispatch({ type: "CHANGE_THEME", newValue: "light" }) }}
        >
          light
        </button>
        <button
          style={{ marginRight: "20px" }}
          onClick={() => { dispatch({ type: "CHANGE_THEME", newValue: "dark" }) }}
        >
          dark
        </button>
        <button
          style={{ marginRight: "20px" }}
          onClick={() => { dispatch({ type: "CHANGE_THEME", newValue: "pink" }) }}
        >
          pink
        </button>
        <button
          style={{ marginRight: "20px" }}
          onClick={() => { dispatch({ type: "CHANGE_THEME", newValue: "blue" }) }}
        >
          blue{" "}
        </button>
      </div>
      <div>
        <button
          style={{ marginTop: "20px" }}
          onClick={() => {
            dispatch({
              type: "CHANGE_THEME",
              newValue: theme === "light" ? "dark" : "light",
            });
          }}
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
      <button>
        <Link to="/home"> Go to home</Link>
      </button>
    </div>
  );
}

export default App;
