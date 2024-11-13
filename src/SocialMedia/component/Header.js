import React, { useState } from 'react'
import logo from "../../image/logo.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge from '@mui/material/Badge';
import DropdownWithDropright from './DropdownWithDropright';



function Header() {

    const [selectedOption, setSelectedOption] = useState("");
const handleChange = (event) => {
    setSelectedOption(event.target.value);
};
  return (
    <div>
      <div className='home-container'>
                <div className='box box1'>
                    <img src={logo} alt="" />
                </div>
                <div className='inner-box'>
                    <div className='box box2'>
                        <div className='box2-div'>
                            <div className='dropdown'>
                                {/* <label htmlFor="dropdown">Choose an option:</label> */}
                                <select className='button' id="dropdown" value={selectedOption} onChange={handleChange}>
                                    <input type="text" />
                                    <option value="">Select an option</option>
                                    <option value="option1">option1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                        </div>
                        <input className='input' type="text" placeholder='Search for a Product or brand ' />
                        <input type="button" value="S" className='search' />
                    </div>
                    <div className='box box3'>
                        <span style={{ border: "" }}>
                            <LocationOnIcon fontSize='' className='h-l-icon' />
                        </span>
                        <div className='home-loc'>
                            <span>Your Location</span>
                            <select className='button' id="dropdown" value={selectedOption} onChange={handleChange}>
                                {/* <input type="text" /> */}
                                <option value="">Select an option</option>
                                <option value="option1">option1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        {/* <select className='button' id="dropdown" value={selectedOption} onChange={handleChange}>
                        <input type="text" />
                        <option value="">Select an option</option>
                        <option value="option1">option1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select> */}
                    </div>
                </div>
                <div className='box box4'>
                    <button> <Badge color="secondary" badgeContent={5}> <FavoriteIcon /> </Badge> <span style={{ margin: "0px 7px" }}>Wishlist</span></button>
                    <button> <Badge color="secondary" badgeContent={5}> <ShoppingCartIcon /> </Badge> <span style={{ margin: "0px 7px" }}>Cart</span></button>
                </div>
            </div>
            <div className='home-container2'>
                <div className='h-c2-box'>
                    <DropdownWithDropright />
                </div>
                <div className='h-c2-box'>
                    <button className='H-btn'>Home</button>
                    <button className='H-btn'>Contact Us</button>
                    <button className='H-btn'>About</button>
                    <button className='H-btn'>Setting</button>
                </div>
                <div className='h-c2-box'>
                    <button className='H-btn'>Login</button>
                    <button className='H-btn'>Sign Up</button>

                </div>
            </div>
    </div>
  )
}

export default Header
