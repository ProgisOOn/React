import React, { useState } from "react";


function computeInitialCounter() {
  console.log("Some calculations...");
  return Math.trunc(Math.random()*20);
}

function App() {
  const [counter, setCounter] = useState(()=>{
    return computeInitialCounter()
  }); 

  const [state, setState] = useState({
    title: 'Счётчик',
    date: Date.now()
  })

  function increament() {
    setCounter(prev => prev + 1);
    // setCounter(prev => prev + 1);
  }

  function decreament() {
    setCounter(counter - 1);
  }

  function updateName() {
    return setState((prev)=> {
      return {
        ...prev,
        title:'New name',
      }
    })
  }

  return (
    <div>
      <h1>Счётчик: {counter}</h1>
      <button onClick={increament} className="btn-success">Добавить</button>
      <button onClick={decreament} className="btn-danger">Убрать</button>
      <button onClick={updateName} className="btn-default">Изменить состояние</button>

      <pre>
        {
          JSON.stringify(state,null,2)
        }
      </pre>
    </div>
  )
    
}

export default App;
