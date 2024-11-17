import React from 'react'
import "./css/footer.css";
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { YouTube } from '@mui/icons-material';

function Footer() {

  const defaultCenter = {
    lat: 0, // Latitude
    lng: 0 // Longitude
  };
  return (
    <>
      <div className='SC_Footer'>
        <div className='SC_continer_footer'>
          <div className="SC_inner_container_footer">
            <h5>Location Map</h5>

            {/* <LoadScript googleMapsApiKey={apiKey}>
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
              />
            </LoadScript> */}
          </div>
          <div className='SC_inner_container1_foter'>
            <div className='SC_inner_container11_footer'>
              <h5>Navigation</h5>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                {/* <li>Admision</li> */}
                {/* <li>Administration</li> */}
                {/* <li>Student Detials</li> */}
                {/* <li>CBSE Report</li> */}
                <li>Contact us</li>
                <li>Create Seller Account</li>
              </ul>
            </div>
            <div className="SC_inner_container12_footer">
              <h5>Contact Us</h5>
              <p><HomeIcon className='SC_footer_icon' />  2nd Flor, Basantpur, Shakurabad, Jehanabad bihar-804425</p>
              <p><PhoneIcon className='SC_footer_icon' /> 0987654321, 1234567890</p>
              <p><MailIcon className='SC_footer_icon' /> email123@gmail.com</p>
            </div>
          </div>
        </div>
        <hr />
        <div className='SC_Lower_footer'>
          <h4>Stay Conneted</h4>
          <div className='SC_Lower_footer_container'>
            <FacebookIcon className='Footer_icon F_i_f'/>
            <TwitterIcon className='Footer_icon F_i_t'/>
            <YouTube className='Footer_icon F_i_y' />
          </div>
          
        </div>
      </div>
      <div className='SC_Lower_footer_container1'>
        © 2020 PPM School Jehanabad. All rights reserved | Design by <span style={{color:"black",fontWeight:"bold"}} > Ripukesh Kumar</span> 
      </div>
    </>
  )
}

export default Footer;