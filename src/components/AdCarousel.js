import React from 'react';
import '../styles/Checkout.css';

import adone from "../assests/adone.jpg";
import adtwo from "../assests/adtwo.jpg";
import adthree from "../assests/adthree.jpg";
import adfour from "../assests/adfour.jpg";
import { Carousel } from "react-bootstrap";

const CarouselPgae = () => {
    return (
        <div>
            <Carousel
                autoPlay={true} 
                indicators={false}
                interval={3000}
                controls={false}
            >
                <Carousel.Item>
                    <img
                        className="d-block ad-img"
                        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>

        
                <Carousel.Item>
                    <img className="d-block ad-img" src={adone} alt="Second slide" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block ad-img" src={adtwo} alt="Third slide" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block ad-img" src={adthree} alt="fourth slide" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block ad-img" src={adfour} alt="fifth slide" />
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default CarouselPgae
