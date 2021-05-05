import React from 'react';
import './Home.css';

import imgone from "../assests/img-1.jpg";
import imgtwo from "../assests/img-2.jpg";
import imgthree from "../assests/img-3.jpg";
import imgfour from "../assests/img-4.jpg";
import imgfive from "../assests/img-5.jpg";
import { Carousel } from "react-bootstrap";

const CarouselPgae = () => {
    return (
        <div>
            <Carousel
        autoPlay={true} 
        indicators={false}
        interval={3000}
        controls={true}
      >
        
        <Carousel.Item>
          <img className="d-block w-100 home-image" src={imgone} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 home-image" src={imgtwo} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 home-image" src={imgthree} alt="fourth slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 home-image" src={imgfour} alt="fifth slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 home-image" src={imgfive} alt="sixth slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 home-image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 home-image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="seventh slide"
          />
        </Carousel.Item>

      </Carousel>
        </div>
    )
}

export default CarouselPgae
