import "./App.css";
import { useReducer } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import "./Theme.css";
import { Link } from "react-router-dom";
import {useContext } from "react";
import Data from "./context/Data";


// const initialData = {
//   failed: "React",
//   level: "beginner",
//   color: "red",
//   counter: 0,
//   theme: "light",
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREASE":
//       return { ...state, counter: state.counter + 1 };
//     case "DECREASE":
//       return { ...state, counter: state.counter - 1 };
//     case "CHANGE_FIELD":
//       return { ...state, failed: action.newValue };
//     case "CHANGE_LEVEL":
//       return { ...state, level: action.newValue };
//     case "CHANGE_COLOR":
//       return { ...state, color: action.newValue };
//     case "CHANGE_THEME":
//       return { ...state, theme: action.newValue };
//     default:
//       return state;
//   }
// };

function App() {
  // const [Data, dispatch] = useReducer(reducer, initialData);
  const {feild, changeField, level, failed, color, counter, theme} = useContext(Data);
  return (
    <div className={`App ${Data.theme}`}>
      <h1>vite project</h1>
      <h2> My field is {failed} </h2>
      <button
        // onClick={() => {
        //   dispatch({ type: "CHANGE_FIELD", newValue: "JavaScript" });
        // }}
      >
        {" "}
        Change field
      </button>
      <br /> <br />
      <h2> I am a {level}</h2>
      <button
        // onClick={() => {
        //   dispatch({ type: "CHANGE_LEVEL", newValue: "intermediate" });
        // }}
      >
        Change level{" "}
      </button>
      <br /> <br />
      <h2> My favorite color is {color} </h2>
      <button
        // onClick={() => {
        //   dispatch({ type: "CHANGE_COLOR", newValue: "blue" });
        // }}
      >
        {" "}
        Change color
      </button>
      <br /> <br />
      <button
        // onClick={() => {
        //   dispatch({ type: "INCREASE" });
        // }}
      >
        Counter {counter}{" "}
      </button>
      <br /> <br />
      <div>
        <button
          style={{ marginRight: "20px" }}
          // onClick={() => {
          //   dispatch({ type: "CHANGE_THEME", newValue: "light" });
          // }}
        >
          light
        </button>
        <button
          style={{ marginRight: "20px" }}
          // onClick={() => {
          //   dispatch({ type: "CHANGE_THEME", newValue: "dark" });
          // }}
        >
          dark
        </button>
        <button
          style={{ marginRight: "20px" }}
          // onClick={() => {
          //   dispatch({ type: "CHANGE_THEME", newValue: "pink" });
          // }}
        >
          pink
        </button>
        <button
          style={{ marginRight: "20px" }}
          // onClick={() => {
          //   dispatch({ type: "CHANGE_THEME", newValue: "blue" });
          // }}
        >
          blue{" "}
        </button>
      </div>
      <div>
        <button
          style={{ marginTop: "20px" }}
          // onClick={() => {
          //   dispatch({
          //     type: "CHANGE_THEME",
          //     newValue: Data.theme === "light" ? "dark" : "light",
          //   });
          // }}
        >
          {Data.theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
      <button>
        <Link to="/home"> Go to home</Link>
      </button>
    </div>
  );
}

export default App;
