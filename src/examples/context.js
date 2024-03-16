import React from "react";
import Main from "./Main";
import Alert from "./alert/alert";
import { AlertProvedir } from "./alert/AlertContext";

export const AlertContext = React.createContext()



function App() {
  return (
    <AlertProvedir>
    <div className="container pt-3">
      <Alert />
      <Main/>
    </div> 
    </AlertProvedir>
  )
    
}

export default App;
