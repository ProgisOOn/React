import React, {  useCallback, useState } from "react";
import ItemsList from "./elements";

function App() {
  const [counter, setCounter] = useState(0);
  const [colored,setColored] = useState(false);


const styles = {
  color: colored ? 'darkred' : 'black',
}

const generateItemsFromAPI = useCallback(()=> {
  return new Array(counter).fill('').map((_,i) => `Элемент ${i}`)
}, [counter ])

  return (
    <div>
      <h1 style={styles}>Счётчик: {counter}</h1>
      <button className="btn-success" onClick={() => setCounter(prev => prev+1)}>Добавить</button>
      <button className="btn-default" onClick={()=> setColored(prev => !prev)}>Colored</button>
    
      <ItemsList getItems={generateItemsFromAPI}/>
    </div>
  )
    
}

export default App;
