import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase , set,ref } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyC78rEvoJkh-OkSyJ6LDxj-sHgo1WydFgE",
    authDomain: "test-app-24fa3.firebaseapp.com",
    projectId: "test-app-24fa3",
    storageBucket: "test-app-24fa3.appspot.com",
    messagingSenderId: "576165444576",
    appId: "1:576165444576:web:9ea9f95fe838cacd230985",
    databaseURL: "https://test-app-24fa3-default-rtdb.firebaseio.com"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp)
const database = getDatabase(firebaseApp)

const FirebaseContext = createContext(null)

export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = (props) =>{

    const signupUserWithEmailPassword = (email, password) =>{
        return createUserWithEmailAndPassword(firebaseAuth,email,password)
    }

    const putData = (key,data) => set(ref(database,key), data)

    return (<FirebaseContext.Provider value={{signupUserWithEmailPassword, putData}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}