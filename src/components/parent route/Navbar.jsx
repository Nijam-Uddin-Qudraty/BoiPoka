import {Link, NavLink} from "react-router-dom"
import React from 'react';

const Navbar = () => {
    const list = <>
    <li className="btn btn-outline"><NavLink to={ "./"}>Home</NavLink></li>
    <li><NavLink to={"./listed_books"}>Listed Books</NavLink></li>
        <li><NavLink to={"pages_to_read"}>Pages to read</NavLink></li>
    </>
    const buttons = 
        <>
            
            <li><NavLink to={"sign_in"}>Sign In</NavLink></li>
            <li><NavLink to={"sign_up"}>Sign Up</NavLink></li>
        </>
        
  
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {list}
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {list}
    </ul>
  </div>
  <ul className="navbar-end flex gap-5">
    {buttons}
  </ul>
</div>

        </div>
    );
};

export default Navbar;