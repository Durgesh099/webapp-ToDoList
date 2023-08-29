import React from 'react';
import { NavLink} from 'react-router-dom';
import './Navigation.css'

function Navigation() {

  return (
    <div>
      <header className='header'>
        <NavLink className='title'to="/">To Do List</NavLink>
      </header>
    </div>
  );
}

export default Navigation;