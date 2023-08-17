import React from 'react';
import Navigation from './components/Navigation'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Task from './components/Task'
import SignUp from './components/SignUp'
import './App.css';

function App() {
  return (
    <React.Fragment>

      <Router>
      <Navigation/>
        <Routes>
        <Route exact path="/" element={<Task/>}/>

        <Route exact path="/signup" element={<SignUp/>}/>

        <Route to="/"/>
        </Routes>
      </Router>

    </React.Fragment>
  );
}

export default App;
