import React from "react";
import './Task.css';

const Task=()=>{

    const arr = [
        {value:'First Task'},
        {value:'Second Task'},
        {value:'Third Task'}
    ]

    return(
        <div className="tasks">
        {arr.map(t=>{
            return <h2 className="each-task">{t.value}</h2>
        })}
        <form>
            <input type="text" id='input' name="input" placeholder="Enter Task"/>
            <button>Add Task</button>
        </form>
        </div>
    )
}

export default Task;