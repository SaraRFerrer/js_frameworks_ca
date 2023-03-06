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
            <Link to="/cart"><button><img src="/images/shopping-cart.png" alt="Logo" /></button></Link>
            
          </li>
          
        </ul>
      </nav>
    );
  }

  function Header() {
    return (
      <header>
        <div>
          <h3>Welcome too (..)</h3>
        </div>
        <Nav />
      </header>
    );
  }

  export default Header;