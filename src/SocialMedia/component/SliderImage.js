
import React,{useState,useEffect} from 'react'
import img1 from"../image/b-1.png"
import img2 from"../image/b-2.png"
import img3 from"../image/b-3.png"


function SliderImage() {
  const images=[img1,img2,img3];
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      // Increment index, but loop back to 0 if we reach the end
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    },4000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]); // Dependency array ensures effect runs only when the length of images changes


  return (
    <div style={{border:"none",height:"70vh",boxSizing:"border-box",position:"relative" ,padding:"5px 10px 4px 10px",zIndex:0}}>
      <img src={images[currentIndex]} alt="" style={{width:"100%",height:"100%",objectFit:"cover",marginTop:"",border:"3px solid gray",padding:"5px",borderRadius:"20px"}}/>
    </div>
  )
}

export default SliderImage