import React, { useState } from 'react';
import "./css/navbar.css";
import { SatelliteRounded, Search } from '@mui/icons-material';
import Logo from "../../src/image/logo.png";
import { ShoppingCart } from '@mui/icons-material';


function Navbar() {

  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (event) => {
      setSelectedOption(event.target.value);
  };

  return (
    <div className='n-container '>
      <div className='n-logo' style={{}}>
        <img src={Logo} alt="" />
      </div>
      <div className='n-search'>
        <Search style={{marginTop:"-3px"}}/>
        <input className='n-search-bar' type="text" placeholder='Search for Product, brand and More'/>
      </div>
      
      <div className='n-button-box'>
        {/* <div>
          <select name="" id="dropdown" value={selectedOption}onChange={handleChange}>
            <option value="myProfile">My Profile</option>
            <option value="order">Orders</option>
            <option value="wishlist">Wishlist</option>
            <option value="rewards">Rewards</option>
            <option value="giftcard">Gift Card</option>
          </select>
        </div> */}
        <button className='n-btn'>Register</button>
        <button className='n-btn'>Login</button>
        {/* <button className='n-btn'><ShoppingCart /> Cart</button>
        <button className='n-btn'><SatelliteRounded/> Become a Seller</button> */}
      </div>
    </div>
  )
}

export default Navbar
