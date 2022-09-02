import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
// import { FaTimes } from 'react-icons/fa';
import "./navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">

        <div className="nav-container">

          <div to="/" className="nav-logo">
            <img className="logo" src="./logo.png" alt="logo empresa astro"></img>
          </div>

          <ul className="nav-menu">
            <Link to='/home' className="link2">
              <li className="nav-item">
                <div to="/home" className="nav-links" onClick={handleClick}>Home</div>
              </li>
            </Link>

            {/* <Link to='/about' className="link2">
              <li className="nav-item">
                <div to="/" className="nav-links" onClick={handleClick}>Sobre Nós</div>
              </li>
            </Link> */}

            <Link to='/members' className="link2">
              <li className="nav-item">
                <div to="/" className="nav-links" onClick={handleClick}>Membros</div>
              </li>
            </Link>

            {/* <Link to='/contact' className="link2">
              <li className="nav-item">
                <div to="/" className="nav-links" onClick={handleClick}>Contato</div>
              </li>
            </Link> */}

            <Link to='/login' className="link2">
              <li className="nav-item">
                <div to="/" className="nav-links" onClick={handleClick}>Login</div>
              </li>
            </Link>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i><FaBars /></i>
          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;

