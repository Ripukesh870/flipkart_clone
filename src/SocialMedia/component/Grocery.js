import React, { useState } from 'react';
import "./css/Grocery.css";
import img from "../../image/download.webp"
import data from "./data/Data.json";
import {useNavigate} from "react-router-dom"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


function Grocery() {
  const nav = useNavigate();
  const datas = data.grocery_items;
  const [cart,setCart]=useState(0);


  const handleClick=(data)=>{
    console.log(data.name);
    nav(`/Glocery/${data.name}`)
  }

  const handleCart=(e)=>{
    e.stopPropagation();
    // setCart(prevCart=>prevCart+1);
    setCart(cart+1)
    console.log(cart)
  }

  const handleInc=(e)=>{
    e.stopPropagation();
    setCart(cart+1)
  }
  const handleDec=(e)=>{
    e.stopPropagation();
    setCart(cart-1)
  }
  return (
    <div className='g-container'>
      <h2>Geocery All Items </h2>
      <div className='g-c-1'>
        {
          datas.map((data) => (
            <div className='g-c-2' onClick={()=>handleClick(data)}>
              <img src={img} alt="" />
              <ul className='g-c-b' style={{ textAlign: "left", listStyle: "none" }}>
                <li style={{ fontSize: "27px", fontWeight: "bold", margin: "0px 10px" }}>{data.name}</li>
                <li>Categories : {data.category}</li>
                <li>Quantity : {data.quantity}</li>
                <li style={{ fontWeight: "bold", fontSize: "18px" }}>price : ₹ {data.price}</li>
                {
                  cart==0 ? <button className="G_B" onClick={handleCart} >Add to cart</button> :
                  <div className='g-d-cart'><RemoveIcon className='g-div-cart-btn' onClick={handleDec}/>{cart}<AddIcon className='g-div-cart-btn' onClick={handleInc}/></div>
                }
                
                
              </ul>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Grocery
