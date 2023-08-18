import React, { useState } from "react";
import './Task.css';
import InsertBox from "./InsertBox";

const Task=()=>{

// ADD & RENDER TASKS ON SCREEN
    const[newState, setState]=useState([
        {id:1 ,c:true, value:'First Task'},
        {id:2, c:false, value:'Second Task'},
        {id:3, c:false, value:'Third Task'}
    ])

    let str = {}
    const inputHandler = (event)=>{
        str = {c:false,value:event.target.value}
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