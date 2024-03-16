import React, {useContext, useReducer  } from "react";

export const AlertContext = React.createContext()

export const useAlert = () =>{
    return useContext(AlertContext)
}

const reducer = (state, action) => {
    switch(action.type) {
        case "show": return {...state, visible:true, text: action.text}
        case "hide": return {...state, visible:false}
        default:return state
    }
}

export const AlertProvedir = ({ children }) => {
    const [state, dispatch]= useReducer(reducer, {
        visible: false,
        text: ''
    })
    
    const show = (text) => dispatch({ type: "show", text})
    const hide = (text) => dispatch({type: "hide", text})
    
    return (
        <AlertContext.Provider value={{
            visible: state.visible,
            text: state.text,
            show, hide
        }}>

                { children }
        </AlertContext.Provider>
    )
}