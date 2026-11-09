import { useContext } from "react";
import Data from "./context/Data";
import { Link } from "react-router-dom";

export default function Home() {
  const { failed, level, color, counter, theme } = useContext(Data);
  return (
    <div className= {`App ${theme}`}>
      <h1> Home Page</h1>
      <h2> My field is {failed} </h2>
      <h2> I am a {level} </h2>
      <h2> My favorite color is {color} </h2>
      <h2> My counter is {counter} </h2>
      <h2> My theme is {theme} </h2>
      <button> <Link to="/">Back</Link> </button>
    </div>
  )
}
