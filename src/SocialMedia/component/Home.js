import React, { useEffect, useState } from 'react';
import "./css/home.css";
// import { Slider } from '@mui/material';
import SliderImage from './SliderImage';
import img3 from "../image/b-3.png"
import { ArrowCircleRight, ShoppingCart } from '@mui/icons-material';
import productsData from "./data/Folder.json";
import data from "./data/Data.json"
import { useNavigate } from 'react-router-dom';

function Home() {
    const topSellingElectronics = data.topSellingElectronics;
    const [randomItems, setRandomItems] = useState([]);
    const nav = useNavigate();
    useEffect(() => {
        const getRandomItems = (arr, num) => {
            const shuffled = arr.sort(() => 0.5 - Math.random(50));
            return shuffled.slice(0, num);
        };

        const items = getRandomItems(topSellingElectronics, 5);
        setRandomItems(items);
    }, []);

    const [selectedOption, setSelectedOption] = useState("");
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const handleClick=(location)=>{
        console.log(location);
        nav(`/${location}`);
    }

    return (
        <div>

            <div className='home-container3'>
                <SliderImage />
            </div>
            <div className='home-container4' style={{ padding: "0pc 15px" }}>
                <div className='home-container4-b1'>
                    {
                        productsData.map((items) => (
                            <div className='h-card' key={items.id} onClick={()=>handleClick(items.product)}>
                                <img src={img3} alt="" />
                                <h4>{items.product}</h4>
                                <p>{items.no_items} products</p>
                            </div>
                        ))
                    }


                </div>
            </div>
            <div className='home-container5'>
                <h2 style={{ marginTop: "10px" }}>Top Selling product</h2>
                <div className='home-container5-box1'>
                    {topSellingElectronics.map((datas) => (
                        <div className='t-s-p-card' key={datas.id}>
                            <img src={img3} alt="" />
                            <div style={{ borderTop: "2px solid rgb(185, 180, 180)", textAlign: "left", padding: "10px" }}>
                                <h5>{datas.name} </h5>
                                <p>price : ₹ {datas.price} </p>
                                <h6 style={{ marginTop: "-10px" }}>rating : {datas.rating}*</h6>
                                <div style={{ textAlign: "center" }}>
                                    <button className='btn h-t-s-p-btn'>Add To Cart <ShoppingCart /> </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='home-container5 home-container6'>
                <h2 style={{ marginTop: "10px" }}>Top Ratted product</h2>
                <div className='home-container5-box1'>
                    {randomItems.map((datas) => (
                        <div className='t-s-p-card' key={datas.id}>
                            <img src={img3} alt="" />
                            <div style={{ borderTop: "2px solid rgb(185, 180, 180)", textAlign: "left", padding: "10px" }}>
                                <h5>{datas.name} </h5>
                                <p>price : ₹ {datas.price} </p>
                                <h6 style={{ marginTop: "-10px" }}>rating : {datas.rating}*</h6>
                                <div style={{ textAlign: "center" }}>
                                    <button className='btn h-t-s-p-btn'>Add To Cart <ShoppingCart /> </button>
                                </div>
                            </div>
                        </div>
                    ))}






                    {/* <div className='t-s-p-card'>
                        <img src={img3} alt="" />
                        <div style={{ borderTop: "2px solid rgb(185, 180, 180)", textAlign: "left", padding: "10px" }}>
                            <h5>Title : Bluetooth </h5>
                            <p>price : 300 </p>
                            <h6 style={{ marginTop: "-10px" }}>rating : 3.4*</h6>
                            <div style={{ textAlign: "center" }}>
                                <button className='btn h-t-s-p-btn'>Add To Cart </button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <div className='home-container7'>
                <h2>Festible Offer</h2>
                <div style={{ display: "flex", border: "" }}>
                    <div style={{ width: "30%", border: "3px solid rgb(204, 204, 206)", boxSizing: "border-box", padding: "25px", margin: "15px", backgroundColor: "rgb(240, 244, 247)", borderRadius: "10px" }}>
                        <img src={img3} alt="" style={{ width: "100%" }} />
                        <div>
                            <h3>Divali Festible Offer</h3>
                            <h6>15oct to 25oct</h6>
                            <button className='btn h-f-o-btn'>Shop Now <ArrowCircleRight /></button>
                        </div>
                    </div>
                    <div className='' style={{ margin: "0px 15px", padding: "5px 10px", display: "flex", width: '70%', overflowX: "scroll", scrollbarWidth: "none" }}>
                        <div className='t-s-p-card'>
                            <img src={img3} alt="" />
                            <div style={{ borderTop: "2px solid rgb(185, 180, 180)", textAlign: "left", padding: "10px" }}>
                                <h5>Title : Bluetooth </h5>
                                <p>price : 300 </p>
                                <h6 style={{ marginTop: "-10px" }}>rating : 3.4*</h6>
                                <div style={{ textAlign: "center" }}>
                                    <button className='btn h-t-s-p-btn'>Add To Cart </button>
                                </div>
                            </div>
                        </div>
                        <div className='t-s-p-card'>
                            <img src={img3} alt="" />
                            <div style={{ borderTop: "2px solid rgb(185, 180, 180)", textAlign: "left", padding: "10px" }}>
                                <h5>Title : Bluetooth </h5>
                                <p>price : 300 </p>
                                <h6 style={{ marginTop: "-10px" }}>rating : 3.4*</h6>
                                <div style={{ textAlign: "center" }}>
                                    <button className='btn h-t-s-p-btn'>Add To Cart </button>
                                </div>
                            </div>
                        </div>
                        <div className='t-s-p-card'>
                            <img src={img3} alt="" />
                            <div style={{ borderTop: "2px solid rgb(185, 180, 180)", textAlign: "left", padding: "10px" }}>
                                <h5>Title : Bluetooth </h5>
                                <p>price : 300 </p>
                                <h6 style={{ marginTop: "-10px" }}>rating : 3.4*</h6>
                                <div style={{ textAlign: "center" }}>
                                    <button className='btn h-t-s-p-btn'>Add To Cart </button>
                                </div>
                            </div>
                        </div>
                        <div className='t-s-p-card'>
                            <img src={img3} alt="" />
                            <div style={{ borderTop: "2px solid rgb(185, 180, 180)", textAlign: "left", padding: "10px" }}>
                                <h5>Title : Bluetooth </h5>
                                <p>price : 300 </p>
                                <h6 style={{ marginTop: "-10px" }}>rating : 3.4*</h6>
                                <div style={{ textAlign: "center" }}>
                                    <button className='btn h-t-s-p-btn'>Add To Cart </button>
                                </div>
                            </div>
                        </div>
                        <div className='t-s-p-card'>
                            <img src={img3} alt="" />
                            <div style={{ borderTop: "2px solid rgb(185, 180, 180)", textAlign: "left", padding: "10px" }}>
                                <h5>Title : Bluetooth </h5>
                                <p>price : 300 </p>
                                <h6 style={{ marginTop: "-10px" }}>rating : 3.4*</h6>
                                <div style={{ textAlign: "center" }}>
                                    <button className='btn h-t-s-p-btn'>Add To Cart </button>
                                </div>
                            </div>
                        </div>
                        <div className='t-s-p-card'>
                            <img src={img3} alt="" />
                            <div style={{ borderTop: "2px solid rgb(185, 180, 180)", textAlign: "left", padding: "10px" }}>
                                <h5>Title : Bluetooth </h5>
                                <p>price : 300 </p>
                                <h6 style={{ marginTop: "-10px" }}>rating : 3.4*</h6>
                                <div style={{ textAlign: "center" }}>
                                    <button className='btn h-t-s-p-btn'>Add To Cart </button>
                                </div>
                            </div>
                        </div>
                        <div className='t-s-p-card'>
                            <img src={img3} alt="" />
                            <div style={{ borderTop: "2px solid rgb(185, 180, 180)", textAlign: "left", padding: "10px" }}>
                                <h5>Title : Bluetooth </h5>
                                <p>price : 300 </p>
                                <h6 style={{ marginTop: "-10px" }}>rating : 3.4*</h6>
                                <div style={{ textAlign: "center" }}>
                                    <button className='btn h-t-s-p-btn'>Add To Cart </button>
                                </div>
                            </div>
                        </div>
                        <div className='t-s-p-card'>
                            <img src={img3} alt="" />
                            <div style={{ borderTop: "2px solid rgb(185, 180, 180)", textAlign: "left", padding: "10px" }}>
                                <h5>Title : Bluetooth </h5>
                                <p>price : 300 </p>
                                <h6 style={{ marginTop: "-10px" }}>rating : 3.4*</h6>
                                <div style={{ textAlign: "center" }}>
                                    <button className='btn h-t-s-p-btn'>Add To Cart </button>
                                </div>
                            </div>
                        </div>
                        <div className='t-s-p-card'>
                            <img src={img3} alt="" />
                            <div style={{ borderTop: "2px solid rgb(185, 180, 180)", textAlign: "left", padding: "10px" }}>
                                <h5>Title : Bluetooth </h5>
                                <p>price : 300 </p>
                                <h6 style={{ marginTop: "-10px" }}>rating : 3.4*</h6>
                                <div style={{ textAlign: "center" }}>
                                    <button className='btn h-t-s-p-btn'>Add To Cart </button>
                                </div>
                            </div>
                        </div>
                        <div className='t-s-p-card'>
                            <img src={img3} alt="" />
                            <div style={{ borderTop: "2px solid rgb(185, 180, 180)", textAlign: "left", padding: "10px" }}>
                                <h5>Title : Bluetooth </h5>
                                <p>price : 300 </p>
                                <h6 style={{ marginTop: "-10px" }}>rating : 3.4*</h6>
                                <div style={{ textAlign: "center" }}>
                                    <button className='btn h-t-s-p-btn'>Add To Cart </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* <div className='home-container8'>
                scbdsvbdvb
            </div> */}
        </div>
    )
}

export default Home
