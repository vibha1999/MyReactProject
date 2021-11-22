import React from 'react';
import './header.css';
import Logo from '../Images/logo.svg';
// import { Link } from 'react-router-dom';

function headerTop() {
  return (
    <div className="bgWhite p1 h8vh w100 navbar">
    <div className="flex ">
  <a href="#" className="mr0"><img src={Logo} alt="React Logo" className="logowidth" /></a>

  <div className="flex">
  <a href="#" className="p1 link pr3">Profile</a>
</div>
  
</div>
  </div>
  )
}

export default headerTop;