import React, { useState } from "react";
import EditIcon from '@rsuite/icons/Edit'
import TrashIcon from '@rsuite/icons/Trash';
import InsertBox from "./InsertBox";
import './Task.css';

const Edit = ({ color }) => <EditIcon style={{ marginRight:10, color}}/>
const Delete = ({ color }) => <TrashIcon style={{ marginRight:10, color}} />

const Task=()=>{

// ADD & RENDER TASKS ON SCREEN
    const[newState, setState]=useState([
        {id:1 ,c:true, value:'First Task'},
        {id:2 ,c:false, value:'Second Task'},
        {id:3 ,c:false, value:'Third Task'}
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

//Delete Task
const del=(t)=>{
    return function(){
        let obj = newState.findIndex((x =>x.value===t.value))
        for(let i=obj; i<newState.length-1; i++){
            newState[i]=newState[i+1]
        }
        newState.pop()
        const newArr = [...newState]
        setState(newArr)
    }
}

    return(
        <div className="tasks">
        <form>
            {newState.map(t=>{
                return(
                    <React.Fragment>
                    <div className="task">
                        <h2 id="h2_1" className="TaskName" onClick={toggle(t)}>
                            <input type="checkbox" className="cbf" checked={t.c} onChange={e => {}}/>
                            <span key={t.id} className="text">{t.value}</span>
                        </h2>
                        <h2 id="h2_2" className="icons">
                            <Edit color="blue" />
                            <span onClick={del(t)}><Delete color="red" onClick={del(t)}/></span>
                        </h2>
                    </div>
                    </React.Fragment>
                )
            })}
            <InsertBox SubmitHandler={submitHandler} InputHandler={inputHandler}/>

        </form>
        </div>
    )
}

export default Task;