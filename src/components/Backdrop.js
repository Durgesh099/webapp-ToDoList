import React from "react";
import ReactDOM from "react-dom";
import './Backdrop.css';

const Backdrop = (props) => {
    return ReactDOM.createPortal(
    <div className="bd" onClick={props.close}></div>, 
    document.getElementById('backdrop'));
}

export default Backdrop;