
import React from "react";
import { NavLink } from "react-router-dom"


function Navbar() {

    return (
        <div className= "container">
           <nav class="navbar navbar-expand navbar-dark bg-dark">
  <NavLink class="navbar-brand" to="/">Exercise Tracker</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <NavLink activeClassName="activeLink" exact className="nav-link"  to="/">Exercise Logs <span class="sr-only">(current)</span> </NavLink>
      </li>
     <li class="nav-item">
        <NavLink activeClassName="activeLink" exact className="nav-link" to="/user">Create User</NavLink>
      </li>
      <li class="nav-item">
        <NavLink activeClassName="activeLink" exact className="nav-link" to="/create">Create Exercise Log</NavLink>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );



};





export default Navbar;