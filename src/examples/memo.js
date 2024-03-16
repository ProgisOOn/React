import React, { useEffect, useMemo, useState } from "react";

function getComputedValue(number) {
  let i = 0;
  while(i<1e9) i++;
  return number*2
}

function App() {
  const [counter, setCounter] = useState(42);
  const [colored,setColored] = useState(false);


const styles = useMemo(()=>({
  color: colored ? 'darkred' : 'black',
}), [colored])


  const computed = useMemo(() => {
    return getComputedValue(counter);
  }, [counter]);

  useEffect(() => {
    console.log("Styles...")
  }, [styles]);

  useEffect(() => {
    console.log('counter changing...');
  }, [ counter]);


  function increament() {
    setCounter((prev)=> prev+1);
  }

  function decreament() {
    setCounter((prev)=> prev-1);
  }

  return (
    <div>
      <h1 style={styles}>Счётчик: {computed}</h1>
      <button onClick={decreament}>Уиеньшить</button>
      <button onClick={increament}>Добавить</button>
      <button onClick={()=> setColored(prev => !prev)}>Colored</button>
    </div>
  )
    
}

export default App;
