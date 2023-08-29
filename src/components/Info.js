import React from "react";
import "./Info.css"

const Info =()=>{
    return(
    <div className="info_div">
        <h2>Add Task:</h2>
        <p>Type task name in the Insertbox and CLick on Add Task or Click Enter.</p>
        <h2>Edit Task:</h2>
        <p>CLick on <span className="red">Blue</span> Edit button with respect to the task you want to edit,
            Rename your task then CLick Enter or Click Done, task will be renamed!
            Then Click on Close.</p>
        <h2>Delete Task:</h2>
        <p>Just click on the <span className="red">Red</span> Delete Icon whichever task you want to delete.</p>
    </div>
    )
}

export default Info