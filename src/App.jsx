import './App.css'

function App() {
  let field = "React.js"
  const changeField = () => {
    field = "Vue.js"
  }
  
  return (
    <>
    <h1>vite project</h1>
    <h2> My field is {field}</h2>
    <button onClick={changeField}> Change field</button>
    </>
  )
}

export default App
