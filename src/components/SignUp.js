import React, { useState }  from "react";
import "./SingUp.css"

const SignUp = () =>{
    const[Email, setEmail]= useState("")
    const[Pass, setPass]= useState("")


    return (
        <div className="form">
        <form><ul>
            <li>Email :
            <input type="email"/></li>

            <li>Password :
            <input type="password"/></li>
        </ul></form>
        </div>
    )
}

export default SignUp