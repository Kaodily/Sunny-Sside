import {useState} from 'react'
import Logo from "./images/logo.svg";
import Arrow from "./images/icon-arrow-down.svg";
import Hamburger from "./images/icon-hamburger.svg";





export default function Header(props) {
  
  return (
    <div className="header">
      <header>
        <nav className="navBar">
          <img src={Logo} alt="logo" />
          <img src={Hamburger} alt="hamburger" onClick = {props.HandleClick } />
        </nav>
        <nav className="desktop_navBar">
          <div className='flex'>
          <img src={Logo} alt="logo" />
          <ul>
            <li><a href = '#'>About</a></li>
            <li><a href = '#'>Services</a></li>
              <li><a href='#'>Projects</a></li>
              <li> <button type ='button'>Contact</button></li>
            </ul>
          
          </div>
        </nav>
        <div className="main">
          <h1>We are creatives</h1>
          <img  src={Arrow} alt="arrow" />
        </div>
      </header>
    </div>
  );
}
