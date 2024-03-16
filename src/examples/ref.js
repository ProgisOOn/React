import React, { useState, useEffect, useRef } from "react";

function App() {
  const [value,setVlaue] = useState('initial');
  const renderCount = useRef(1);
  const inputRef = useRef(null)
  const previous = useRef(null)

  useEffect(()=>{
    renderCount.current++
  })

  useEffect(()=> {
    previous.current = value
  }, [value])

  const focus = () => {
    inputRef.current.focus()
  }
  return (
    <div>
      <h1>Количество рендеров: {renderCount.current}</h1>
      <h2>Prev value: {previous.current}</h2>
      <input ref={inputRef} type="text" onChange={ e=> setVlaue(e.target.value)} value={value}/>
      <button onClick={focus}>Фокус</button>
    </div>
  )
    
}

export default App;
