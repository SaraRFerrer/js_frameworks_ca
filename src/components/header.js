import React from "react";
import { Link } from 'react-router-dom';


function Nav() {
    return (
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="./cart"><button><img src="./cart.png" alt="" className="nav--img"/></button></Link>
            
          </li>
          
        </ul>
      </nav>
    );
  }

  function Header() {
    return (
      <header>
        <div>
          <h3>TechCom@</h3>
        </div>
        <Nav />
      </header>
    );
  }

  export default Header;