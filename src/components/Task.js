import React, { useState } from "react";
import EditIcon from '@rsuite/icons/Edit'
import TrashIcon from '@rsuite/icons/Trash';
import InsertBox from "./InsertBox";
import Backdrop from "./Backdrop"
import ReactDOM from "react-dom"
import './Task.css';

let gObj = {}
const Edit = ({ color }) => <EditIcon style={{ marginRight:10, color}}/>
const Delete = ({ color }) => <TrashIcon style={{ marginRight:10, color}} />

const Task=()=>{

    const[show, setShow]=useState(false)
    const toggle = ()=>setShow(!show)

// ADD & RENDER TASKS ON SCREEN
    const[newState, setState]=useState([
        {id:1 ,c:true, value:'Sample Task 1'},
        {id:2 ,c:false, value:'Sample Task 2'}
    ])

    let str = {}
    const inputHandler = (event)=>{
        str = {id:Date.now() + Math.random(), c:false,value:event.target.value}
    }

    let estr = ""
    const ChangeValue = (event)=>{
        estr = event.target.value
    }

    const submitHandler = (event) =>{
        event.preventDefault()

        document.getElementById('input').value = ''

        setState( newState.concat(str) )

    }

//Check Task
    const check=(t)=>{
        return function(){
            let obj = newState.findIndex((x =>x.id===t.id))
            newState[obj].c = !t.c
            const newTask = [...newState]
            setState(newTask)
        }
    }

//Delete Task
const del=(t)=>{
    return function(){
        let obj = newState.findIndex((x =>x.id===t.id))
        for(let i=obj; i<newState.length-1; i++){
            newState[i]=newState[i+1]
        }
        newState.pop()
        const newArr = [...newState]
        setState(newArr)
    }
}

//Edit Task
    const editHandler=(t)=>{
        return function(){
            let obj = newState.findIndex((x =>x.id===t.id))
            newState[obj].value = estr
            const newTask = [...newState]
            setState(newTask)
        }
    }

    const prevent = (event)=>{
        event.preventDefault()
    }

    return(
        <div className="tasks">
        <form>
            {newState.map(t=>{
                return(
                    <React.Fragment>
                    <div className="task">
                        <h2 id="h2_1" className="TaskName" onClick={check(t)}>
                            <input type="checkbox" className="cbf" checked={t.c} onChange={e => {}}/>
                            <span className="text">{t.value}</span>
                        </h2>
                        <h2 id="h2_2" className="icons">
                            <span onClick={function(){
                                gObj = t
                                toggle()
                            }}><Edit color="blue"/></span>
                            <span onClick={del(t)}><Delete color="red"/></span>
                        </h2>
                    </div>
                    </React.Fragment>
                )
            })}
            <InsertBox SubmitHandler={submitHandler} InputHandler={inputHandler}/>

            {show && ReactDOM.createPortal(
                    <form className="modal" onSubmit={prevent}>
                        <h2>Rename Task</h2>
                        <input type="text" onChange={ChangeValue}></input>
                        <button onClick={editHandler(gObj)}>Done</button>
                        <button onClick={toggle}>CLose</button>
                    </form>, document.getElementById("modal"))}

            {show && <Backdrop close={toggle}/>}
        </form>
        </div>
    )
}

export default Task;