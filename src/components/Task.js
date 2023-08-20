import React, { useState } from "react";
import './Task.css';
import InsertBox from "./InsertBox";

const Task=()=>{

// ADD & RENDER TASKS ON SCREEN
    const[newState, setState]=useState([
        {c:true, value:'First Task'},
        {c:false, value:'Second Task'},
        {c:false, value:'Third Task'}
    ])

    let str = {}
    const inputHandler = (event)=>{
        str = {c:false,value:event.target.value}
    }

    const submitHandler = (event) =>{
        event.preventDefault()

        document.getElementById('input').value = ''

        setState( newState.concat(str) )

    }

//Check Task
    const toggle=(t)=>{
        return function(){
            let obj = newState.findIndex((x =>x.value===t.value))
            newState[obj].c = !t.c
            const newTask = [...newState]
            setState(newTask)
        }
    }

    return(
        <div className="tasks">
        <form>
            {newState.map(t=>{
                return(
                    <React.Fragment>
                    <h2 className="h2" onClick={toggle(t)}>
                        <input id='checkbox' type="checkbox" className="cbf" checked={t.c}/>
                        <span className="text">{t.value}</span>
                        {console.log(document.getElementById(''))}
                    </h2>
                    </React.Fragment>
                )
            })}
            <InsertBox SubmitHandler={submitHandler} InputHandler={inputHandler}/>

        </form>
        </div>
    )
}

export default Task;