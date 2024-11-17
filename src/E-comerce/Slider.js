
// import React, { useState, useEffect } from 'react'
// import img1 from "./data/image/i1.jpg"
// import img2 from "./data/image/i2.jpg"
// import img3 from "./data/image/i3.jpg"
// import img4 from "./data/image/i4.jpg"
// import img5 from "./data/image/i5.jpg"
// import img6 from "./data/image/i6.jpg"
// // import { Margin } from '@mui/icons-material'
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faHairdryer } from '@fortawesome/free-solid-svg-icons'; // Example hair symbol
// // import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

// function Slider() {
//   const images = [img1, img2, img3, img4, img5, img6];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Increment index, but loop back to 0 if we reach the end
//       setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//     }, 4000); // Change image every 2 seconds

//     return () => clearInterval(interval);
//   }, [images.length]); // Dependency array ensures effect runs only when the length of images changes

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div style={{ backgroundImage:`url(${images[currentIndex]})`, border: "2px solid gray",borderRadius:"10px", height: "30vh", boxSizing: "border-box", position: "relative", padding: "5px 10px 5px 10px",backgroundSize:"cover",backgroundPosition:"center"}} >
//       {/* <img src={images[currentIndex]} alt="" style={{width:"100%",height:"100%",objectFit:"cover",marginTop:"",border:"3px solid gray",padding:"5px",borderRadius:"20px"}}/> */}

//       <div style={{ display: "flex", border: "none", justifyContent: "space-between",marginTop:"70px",position:""}}>
//         <button style={{padding:"1px 10px",borderRadius:"10px"}} onClick={goToPrevious}>left</button>
//         <button style={{padding:"1px 10px",borderRadius:"10px"}} onClick={goToNext}>right</button>
//       </div>

//       <div style={{ textAlign: "center", marginTop: "80px"}}>
//         {images.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             style={{
//               display: "inline-block",
//               width: currentIndex === index ? "12px" : "8px",
//               height: currentIndex === index ? "12px" : "8px",
//               margin: "0 4px",
//               borderRadius: "50%",
//               backgroundColor: currentIndex === index ? "gray" : "lightgray",
//               cursor: "pointer",
//             }}
//           ></span>
//         ))}
//       </div>
//     </div>

//   )
// }

// export default Slider















import React, { useState, useEffect } from "react";
import img1 from "./data/image/i1.jpg";
import img2 from "./data/image/i2.jpg";
import img3 from "./data/image/i3.jpg";
import img4 from "./data/image/i4.jpg";
import img5 from "./data/image/i5.jpg";
import img6 from "./data/image/i6.jpg";

function Slider() {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ width: "100%", overflow: "hidden", position: "relative", border: "2px solid gray", borderRadius: "10px" }}>
      <div
        style={{
          display: "flex",
          transition: "transform 1s ease-in-out",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} style={{ minWidth: "100%", height: "30vh", backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          padding: "10px",
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.8)",
          border: "none",
          cursor: "pointer",
        }}
        onClick={goToPrevious}
      >
        &#8592;
      </button>
      <button
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          padding: "10px",
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.8)",
          border: "none",
          cursor: "pointer",
        }}
        onClick={goToNext}
      >
        &#8594;
      </button>

      {/* Dots for Navigation */}
      <div style={{ textAlign: "center", marginTop: "10px", position: "absolute", bottom: "10px", width: "100%" }}>
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
  );
}

export default Slider;
