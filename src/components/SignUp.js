import React , {useState} from "react";
import {useFirebase} from "../context/firebase"
import "./SingUp.css"

const SignUp = () =>{

    const firebase = useFirebase();

    const[email, setEmail]= useState("")
    const[pass, setPass]= useState("")

    return (
        <div className="form">
        <form><ul>
            <li>Email :
            <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/></li>

            <li>Password :
            <input type="password" required value={pass} onChange={(e)=>setPass(e.target.value)}/></li>
        
            <li><button onClick={()=> {
                    firebase.signupUserWithEmailPassword(email,pass);
                    firebase.putData('users/' +'durgesh' ,{email,pass}) 
                    }}
                    >Submit</button></li>
        </ul></form>
        </div>
    )
}

export default SignUp