import React, { useState } from "react";
import './Task.css';

const Task=()=>{

    const arr = [
        'First Task',
        'Second Task',
        'Third Task'
    ]

    const[newState, setState]=useState(arr)

    let str = []
    const inputHandler = (event)=>{
        str = [event.target.value]
    }

    const submitHandler = (event) =>{
        event.preventDefault()

        setState( newState.concat(str) )
    }

    return(
        <div className="tasks">
        {newState.map(t=>{
            return <h2>{t}</h2>
        })}
        <form>
            <input type="text" onChange={inputHandler} name="input" placeholder="Enter Task"/>
            <button onClick={submitHandler}>Add Task</button>
        </form>
        </div>
    )
}

export default Task;