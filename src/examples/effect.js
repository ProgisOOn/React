import React, { useState, useEffect  } from "react";


function App() {
  const [type,setType] = useState('users');
  const [pos, setPos] = useState({
    x:0, y:0,
  })
  

  const MouseMoveHandler = event => {
    setPos({
      x:event.clientX,
      y:event.clientY,
    })
  }

  useEffect(()=>{
    console.log("ComponentDidMount...")

    window.addEventListener("mousemove", MouseMoveHandler)

    return () => {
      window.removeEventListener("mousemove", MouseMoveHandler)
    }
  }, []);

  return (
    <div>
      <h1>ресурс: {type}</h1>
      <button onClick={() => setType("users")}>Пользователи</button>
      <button onClick={() => setType("todos")}>Todos</button>
      <button onClick={() => setType("posts")}>Посты</button>

      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  )
    
}

export default App;
