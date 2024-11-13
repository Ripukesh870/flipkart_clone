// DropdownWithDropright.js
import React from 'react';
import './css/DropdownWithDropright.css'; // Import the CSS file
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import { MenuItem } from '@mui/material';
import { MenuBook } from '@mui/icons-material';



const DropdownWithDropright = () => {
  return (
    <div className="dropdown">
       <button className="dropbtn H-btn"><MenuBook /> Dropdown Button <KeyboardArrowDownIcon/></button>
      <div className="dropdown-content">

        <div className="dropright">
          <a href="#">
            More Options <i className="arrow-right"></i>
          </a>
          <div className="dropright-content">
            <a href="#">Sub-option 1</a>
            <a href="#">Sub-option 2</a>
          </div>
        </div>

        <div className="dropright">
          <a href="#">
            More Options <i className="arrow-right"></i>
          </a>
          <div className="dropright-content">
            <a href="#">Sub-option 1</a>
            <a href="#">Sub-option 2</a>
          </div>
        </div>

        <div className="dropright">
          <a href="#">
            More Options <i className="arrow-right"></i>
          </a>
          <div className="dropright-content">
            <a href="#">Sub-option 1</a>
            <a href="#">Sub-option 2</a>
          </div>
        </div>
        


      </div>
    </div>
  );
};

export default DropdownWithDropright;
