import React from 'react'
import './css/home.css'
// import img from "../../src/image/download.webp"
// import data1 from "../E-comerce/data/offertSection.json"
import data1 from "../E-comerce/data/data.json"
import Slider from './Slider'
import img1 from "./data/image/i1.jpg"
import smartPhone from "./data/smartphone.json"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Home() {
    console.log(data1)

    const handleItems=()=>{
        
    }
    return (
        <div className='h-container'>
            <div className='h-container1'>
                {
                    data1.map((data) => (
                        <div key={data.id} className='h-top-offers' onClick={handleItems}>
                            <img className='h-top-offers-img' src={data.image} alt="" />
                            <h6>{data.product}</h6>
                        </div>
                    ))
                }
            </div>
            <div className='h-container2'>
                <Slider />
            </div>



            <div className='h-container3'>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "2px 10px", margin: "10px" }}>
                    <h4>Best deals on SmartPhone</h4>
                    <button style={{ background: "blue", borderRadius: "30px", border: "none" }}> <KeyboardArrowRightIcon fontSize='large' /> </button>
                </div>

                <div style={{ display: "flex", justifyContent: "", border: "", background: "#e8e4a9", margin: "10px", borderRadius: "5px", overflowX: "scroll", scrollbarWidth: "none", padding: "2px 15px" }}>
                    {
                        smartPhone.map((data) => (
                            <div className='h-container-card' style={{ border: "2px solid blue", width: "180px", textAlign: "center", margin: "10px", background: "white", }}>
                                <img className='h-container-card-img' src={data.image} alt="" style={{ width: "160px", height: "180px" }} />
                                <span style={{}}>{data.brand}</span>
                                <p>From {data.price}</p>
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className='h-container4'>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "2px 10px", margin: "10px" }}>
                    <h4 >499 only</h4>
                    <button style={{ background: "blue", borderRadius: "30px", border: "none" }}> <KeyboardArrowRightIcon fontSize='large' /> </button>
                </div>

                <div style={{ display: "flex", justifyContent: "", border: "", background: "#e8e4a9", margin: "10px", borderRadius: "5px", overflowX: "scroll", scrollbarWidth: "none", padding: "2px 15px" }}>
                    {
                        smartPhone.map((data) => (
                            <div className='h-container-card' style={{ border: "2px solid blue", width: "180px", textAlign: "center", margin: "10px", background: "white", }}>
                                <img className='h-container-card-img' src={data.image} alt="" style={{ width: "160px", height: "180px" }} />
                                <span style={{}}>{data.brand}</span>
                                <p>From {data.price}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div style={{ border: "2px solid red" }}>
                <div style={{ backgroundImage: `url(${img1})`, height: "150px", backgroundSize: "cover", backgroundPosition: "center", textAlign: "center", paddingTop: "30px", border: "2px solid gray" }}>
                    <h1>Fastibal Celibration</h1>
                    <h3>Spacial deals for special occasions! </h3>
                </div>

                <div style={{ border: "2px solid blue", display: "flex", justifyContent: "center",flexWrap:"wrap"}}>
                    <div style={{ border: "2px solid red", width: "33%", backgroundImage: `url(${img1})`, backgroundSize: "cover", backgroundPosition: "center", textAlign: "center", height: "250px", paddingTop: "80px" }}>
                        <h2>Shoes</h2>
                        <h4>Min. 40% off</h4>
                    </div>
                    <div style={{ border: "2px solid red", width: "33%", backgroundImage: `url(${img1})`, backgroundSize: "cover", backgroundPosition: "center", textAlign: "center", height: "250px", paddingTop: "80px" }}>
                        <h2>Shoes</h2>
                        <h4>Min. 40% off</h4>
                    </div>
                    <div style={{ border: "2px solid red", width: "33%", backgroundImage: `url(${img1})`, backgroundSize: "cover", backgroundPosition: "center", textAlign: "center", height: "250px", paddingTop: "80px" }}>
                        <h2>Shoes</h2>
                        <h4>Min. 40% off</h4>
                    </div>
                    <div style={{ border: "2px solid red", width: "33%", backgroundImage: `url(${img1})`, backgroundSize: "cover", backgroundPosition: "center", textAlign: "center", height: "250px", paddingTop: "80px" }}>
                        <h2>Shoes</h2>
                        <h4>Min. 40% off</h4>
                    </div>
                    <div style={{ border: "2px solid red", width: "33%", backgroundImage: `url(${img1})`, backgroundSize: "cover", backgroundPosition: "center", textAlign: "center", height: "250px", paddingTop: "80px" }}>
                        <h2>Shoes</h2>
                        <h4>Min. 40% off</h4>
                    </div>
                    <div style={{ border: "2px solid red", width: "33%", backgroundImage: `url(${img1})`, backgroundSize: "cover", backgroundPosition: "center", textAlign: "center", height: "250px", paddingTop: "80px" }}>
                        <h2>Shoes</h2>
                        <h4>Min. 40% off</h4>
                    </div>
                </div>

            </div>

    

            <div className='h-container4'  >
                <div style={{ display: "flex", justifyContent: "space-between", padding: "2px 10px", margin: "10px",marginTop:"20px" }}>
                    <h4 >Best Electronic Items</h4>
                    <button style={{ background: "blue", borderRadius: "30px", border: "none" }}> <KeyboardArrowRightIcon fontSize='large' /> </button>
                </div>

                <div style={{ display: "flex", justifyContent: "", border: "", background: "#e8e4a9", margin: "10px", borderRadius: "5px", overflowX: "scroll", scrollbarWidth: "none", padding: "2px 15px" }}>
                    {
                        smartPhone.map((data) => (
                            <div className='h-container-card' style={{ border: "2px solid blue", width: "180px", textAlign: "center", margin: "10px", background: "white", }}>
                                <img className='h-container-card-img' src={data.image} alt="" style={{ width: "160px", height: "180px" }} />
                                <span style={{}}>{data.brand}</span>
                                <p>From {data.price}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='h-container4'>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "2px 10px", margin: "10px" }}>
                    <h4 >Best Gadgets & appliances </h4>
                    <button style={{ background: "blue", borderRadius: "30px", border: "none" }}> <KeyboardArrowRightIcon fontSize='large' /> </button>
                </div>

                <div style={{ display: "flex", justifyContent: "", border: "", background: "#e8e4a9", margin: "10px", borderRadius: "5px", overflowX: "scroll", scrollbarWidth: "none", padding: "2px 15px" }}>
                    {
                        smartPhone.map((data) => (
                            <div className='h-container-card' style={{ border: "2px solid blue", width: "180px", textAlign: "center", margin: "10px", background: "white", }}>
                                <img className='h-container-card-img' src={data.image} alt="" style={{ width: "160px", height: "180px" }} />
                                <span style={{}}>{data.brand}</span>
                                <p>From {data.price}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='h-container4'>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "2px 10px", margin: "10px" }}>
                    <h4 >Kids Toys</h4>
                    <button style={{ background: "blue", borderRadius: "30px", border: "none" }}> <KeyboardArrowRightIcon fontSize='large' /> </button>
                </div>

                <div style={{ display: "flex", justifyContent: "", border: "", background: "#e8e4a9", margin: "10px", borderRadius: "5px", overflowX: "scroll", scrollbarWidth: "none", padding: "2px 15px" }}>
                    {
                        smartPhone.map((data) => (
                            <div className='h-container-card' style={{ border: "2px solid blue", width: "180px", textAlign: "center", margin: "10px", background: "white", }}>
                                <img className='h-container-card-img' src={data.image} alt="" style={{ width: "160px", height: "180px" }} />
                                <span style={{}}>{data.brand}</span>
                                <p>From {data.price}</p>
                            </div>
                        ))
                    }
                </div>
            </div>




        </div>
    )
}

export default Home;
