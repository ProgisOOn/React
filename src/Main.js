import React from "react";
import { useAlert } from "./alert/AlertContext";

export default function Main() {
    const {show} = useAlert()
    return (
        <>
        <h1>Привет из Context</h1>
        <button onClick={() => show("Main rul")} className="btn btn-success">Показать alert</button>
        </>
    )
}