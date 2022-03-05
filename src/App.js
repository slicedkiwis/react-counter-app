
import Card from "./components/Card";
import { useState } from "react";
import './app.css'
function App() {
  const [count,setCount] = useState(0)
  let add = () =>{
    setCount(count + 1)

  }
  let subtract = () =>{
    setCount(count - 1)
  }
  let clear = () =>{
    setCount(0)
  }
  return (
    <div className="App">
    <Card>
      <h1 className={count > 0 ? "positive": count < 0 ? "negative":null}>{count}</h1>
      <div className="btns">
      <button onClick = {add}>+</button>
      <button onClick = {clear}>clear</button>
      <button onClick = {subtract}>-</button>
      </div>
    </Card>
    </div>
  );
}

export default App;
