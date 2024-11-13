import React, { useState } from 'react'
import data from "./data/Data.json";
import img from "../../image/download.webp"
import "./css/gviewpage.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


function Gview_page() {
  const datas = data.grocery_items;
  const [cart, setCart] = useState(0);
  const handleClick=()=>{


  }


  const handleCart = (e) => {
    e.stopPropagation();
    // setCart(prevCart=>prevCart+1);
    setCart(cart + 1)
    console.log(cart)
  }

  const handleInc = (e) => {
    e.stopPropagation();
    setCart(cart + 1)
  }
  const handleDec = (e) => {
    e.stopPropagation();
    setCart(cart - 1)
  }
  return (
    <div className='g-v-container'>
      {/* <div className='g-v-container-1'>
        <div className='g-v-c-img'>
          <img src={img} alt="" />
        </div>
        <div className='b-b-c-data'>
          <h2 style={{}}>banana</h2>
          <p style={{ fontSize: "18px", }}>category : Fruit</p>
          <h5>Quantity : 2</h5>
          <h5>price : 200</h5>
          {
            cart == 0 ? <button className="G_B" onClick={handleCart} >Add to cart</button> :
              <div className='g-d-cart g-v-c-btn'><RemoveIcon className='g-div-cart-btn' onClick={handleDec} />{cart}<AddIcon className='g-div-cart-btn' onClick={handleInc} /></div>
          }
        </div>
      </div> */}
      <div className='g-c-2' style={{ width: "" }}>
        <img src={img} alt="" />
        <ul className='g-c-b' style={{ textAlign: "left", listStyle: "none" }}>
          <li style={{ fontSize: "27px", fontWeight: "bold", margin: "0px 10px" }}>{data.name}  Banana</li>
          <li>Categories : {data.category}</li>
          <li>Quantity : {data.quantity}</li>
          <li style={{ fontWeight: "bold", fontSize: "18px" }}>price : ₹ {data.price}</li>
          {
            cart == 0 ? <button className="G_B" onClick={handleCart} >Add to cart</button> :
              <div className='g-d-cart'><RemoveIcon className='g-div-cart-btn' onClick={handleDec} />{cart}<AddIcon className='g-div-cart-btn' onClick={handleInc} /></div>
          }
        </ul>
      </div>
      <h2 style={{marginTop:"40px"}}>related items</h2>

      <div className='g-v-container-2'>  
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

export default Gview_page
