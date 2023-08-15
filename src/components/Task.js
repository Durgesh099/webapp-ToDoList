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

        document.getElementById('input').value = ''
    }
    

    return(
        <div className="tasks">
        <form>
            {newState.map(t=>{
                return(
                    <React.Fragment>
                    <h2 className="h2">
                        <input type="checkbox" className="cbf"/>
                        <span className="text">{t}</span>
                    </h2>
                    </React.Fragment>
                )
            })}
            <input id="input" className="input" type="text" onChange={inputHandler} name="input" placeholder="Enter Task"/>
            <button className="btn" onClick={submitHandler}>Add Task</button>
        </form>
        </div>
    )
}

export default Task;