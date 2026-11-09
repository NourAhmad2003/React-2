import { createContext, useReducer } from "react";
const Data = createContext();

const initialData = {
  failed: "React",
  level: "beginner",
  color: "red",
  counter: 0,
  theme: "light",
};
const reducer = () => {};

export function DataProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  const changeField = () => {
    dispatch({ type: "CHANGE_FEILD", newValue: "Angular" });
  };
  return (
    <Data.Provider value={{ ...firstState, changeField }}>
      {children}
    </Data.Provider>
  );
}
export default Data;
