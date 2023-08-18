import React from "react";
import "./InsertBox.css"

const InsertBox =(props)=>{
    return (
        <div className="insertbox">
            <input id="input" className="input" type="text" onChange={props.InputHandler} name="input" placeholder="Enter Task"/>
            <button className="btn" onClick={props.SubmitHandler}>Add Task</button>
        </div>
    )
}

export default InsertBox