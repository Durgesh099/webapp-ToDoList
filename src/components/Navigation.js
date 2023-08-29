import React from 'react';
import { NavLink} from 'react-router-dom';
import './Navigation.css'

function Navigation() {

  return (
    <div>
      <header className='header'>
        <NavLink className='title' to="/webapp-ToDoList">To Do List</NavLink>
        <NavLink className='info' to="/webapp-ToDoList/info">i</NavLink>
      </header>
    </div>
  );
}

export default Navigation;