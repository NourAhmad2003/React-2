import { createContext, useReducer } from "react";
const Data = createContext();

const initialData = {
  failed: "React",
  level: "beginner",
  color: "red",
  counter: 0,
  theme: "light",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, counter: state.counter + 1 };
    case "DECREASE":
      return { ...state, counter: state.counter - 1 };
    case "CHANGE_FIELD":
      return { ...state, failed: action.newValue };
    case "CHANGE_LEVEL":
      return { ...state, level: action.newValue };
    case "CHANGE_COLOR":
      return { ...state, color: action.newValue };
    case "CHANGE_THEME":
      return { ...state, theme: action.newValue };
    default:
      return state;
}};

export function DataProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  const changeField = () => {
    dispatch({ type: "CHANGE_FIELD", newValue: "Angular" });
  };
  return (
    <Data.Provider value={{ ...firstState, changeField, dispatch }}>
      {children}
    </Data.Provider>
  );
}
export default Data;
