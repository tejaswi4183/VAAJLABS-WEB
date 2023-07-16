
import React from 'react';
import Slider from "react-slick";
import img1 from "../assests/img.jpg";
import img2 from "../assests/img2.jpeg";
import img3 from "../assests/img3.jpeg";
import img4 from "../assests/img4.jpeg";
import img5 from "../assests/img5.jpeg";
import img6 from "../assests/img6.webp";
import './what.css'

function What(){
 
var settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className='container3' >
        <h2 className='head'>WHAT WE DO</h2>
        <Slider className="slider" {...settings}>
          <div>
           <img src={img1} className="img-fluid" width={480} alt=" " />
          </div>
          <div>
          <img src={img2} className="img-fluid" width={480} alt=" " />
          </div>
          <div>
          <img src={img3} className="img-fluid"  width={480} alt=" " />
          </div>
          <div>
          <img src={img4} className="img-fluid" width={480} alt=" " />
          </div>
          <div>
          <img src={img5} className="img-fluid" width={480} alt=" " />
          </div>
          <div>
          <img src={img6} className="img-fluid" width={480} alt=" " />
          </div>
        </Slider>
        </div>
      
    );
  }

export default What;