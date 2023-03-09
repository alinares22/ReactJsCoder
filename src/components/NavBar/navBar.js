import React from 'react';
import CartWidget from '../CartWidget/cartWidget';
import "../styles/navBar.css";


export const NavBar = () => {
  return ( 
      <nav className="navigation">
        <a href="/" className="brand-name">
          Streamers&Watch 
          <img src="../img/logo.png" alt="" />
        </a>
        <div
          className="navigation-menu">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">Streamers</a>
            </li>
            <li>
              <a href="/carrito">
                <CartWidget/>
              </a>
            </li>
          </ul>
        </div>
      </nav>
   );
}
 
export default NavBar; 