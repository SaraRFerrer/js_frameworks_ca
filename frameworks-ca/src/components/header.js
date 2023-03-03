import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          
        </ul>
      </nav>
    );
  }

  function Header() {
    return (
      <header>
        <div>Header with Logo and nav</div>
        <Nav />
      </header>
    );
  }

  export default Header;