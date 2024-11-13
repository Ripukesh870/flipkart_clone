
import React, { useState, useEffect } from 'react'
import img1 from "./data/image/i1.jpg"
import img2 from "./data/image/i2.jpg"
import img3 from "./data/image/i3.jpg"
import img4 from "./data/image/i4.jpg"
import img5 from "./data/image/i5.jpg"
import img6 from "./data/image/i6.jpg"
// import { Margin } from '@mui/icons-material'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHairdryer } from '@fortawesome/free-solid-svg-icons'; // Example hair symbol
// import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

function Slider() {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment index, but loop back to 0 if we reach the end
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 4000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]); // Dependency array ensures effect runs only when the length of images changes

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ backgroundImage:`url(${images[currentIndex]})`, border: "2px solid gray",borderRadius:"10px", height: "30vh", boxSizing: "border-box", position: "relative", padding: "5px 10px 5px 10px",backgroundSize:"cover",backgroundPosition:"center"}} >
      {/* <img src={images[currentIndex]} alt="" style={{width:"100%",height:"100%",objectFit:"cover",marginTop:"",border:"3px solid gray",padding:"5px",borderRadius:"20px"}}/> */}

      <div style={{ display: "flex", border: "none", justifyContent: "space-between",marginTop:"70px",position:""}}>
        <button style={{padding:"1px 10px",borderRadius:"10px"}} onClick={goToPrevious}>left</button>
        <button style={{padding:"1px 10px",borderRadius:"10px"}} onClick={goToNext}>right</button>
      </div>

      <div style={{ textAlign: "center", marginTop: "80px"}}>
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              display: "inline-block",
              width: currentIndex === index ? "12px" : "8px",
              height: currentIndex === index ? "12px" : "8px",
              margin: "0 4px",
              borderRadius: "50%",
              backgroundColor: currentIndex === index ? "gray" : "lightgray",
              cursor: "pointer",
            }}
          ></span>
        ))}
      </div>
    </div>

  )
}

export default Slider
