import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cart";

function Nav() {
  const { cart } = useContext(CartContext);

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
          <Link to="cart">
            <div className="cartContainer">
              <img src="/cart.png" alt="" className="nav--img" />
              <p className="cart-length">{cart.length}</p>
            </div>
          </Link>
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
