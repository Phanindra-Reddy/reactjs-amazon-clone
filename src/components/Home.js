import React from "react";
import './Home.css';
import CarouselPgae from "./CarouselPgae";
import Product from "./Product";
//import Header from './Header';

const Home = () => {

  return (
    
    <>
    {/* <Header/> */}
    <div className="home">
        <div className="home_container">
            <CarouselPgae/>
        </div>

        <div className="home_row">
            <Product
                id="528695"
                title="Apple AirPods Max - Silver"
                price={59999}
                image="https://www.lowyat.net/wp-content/uploads/2021/01/apple-airpods-max-my-01-770x513.jpg"
                rating={5}
            />
            <Product
                id="8962133"
                title="Latest_Dell Inspiron 15 3000 Laptop"
                price={26912}
                image="https://images-na.ssl-images-amazon.com/images/I/61fXV37wL1L._AC_SL1154_.jpg"
                rating={2}
            />
        </div>

        <div className="home_row">
            <Product
                id="95033323"
                title="Redmi 9 (4GB RAM, 64GB Storage)"
                price={8799}
                image="https://images-na.ssl-images-amazon.com/images/I/716nHhG9SWL._AC_SL1500_.jpg"
                rating={4}
            />
            <Product
                id="12358956"
                title="Apple MackBook Pro(16-inch)"
                price={199900}
                image="https://images-na.ssl-images-amazon.com/images/I/71jG%2Be7roXL._AC_SL1500_.jpg"
                rating={5}
            />
            <Product
                id="57895612"
                title="Google Home"
                price={3399}
                image="https://www.logisticsmanager.com/wp-content/uploads/2017/09/Google-Assistant.png"
                rating={3}
            />
            <Product
                id="2356879"
                title="Fitness Tracker with Heart Rate"
                price={1783}
                image="https://images-na.ssl-images-amazon.com/images/I/61OGzieBQSL._AC_SL1500_.jpg"
                rating={4}
            />
        </div>

        <div className="home_row">
            <Product
                id="65789512"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={26499}
                image="https://images-na.ssl-images-amazon.com/images/I/91u5adTvrVL._AC_SL1500_.jpg"
                rating={3}
            />
            <Product
                id="23575666"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={4999}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                rating={5}
            />
            <Product
                id="7851236"
                title="New Apple iPad Pro (12.9-inch, wifi, 128GB) - Silver (4th Generation)"
                price={71900}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                rating={4}
            />
        </div>

        <div className="home_row">
            <Product
                id="434446589"
                title="LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99 Percentage Color Gamut and HDR10 Compatibility, Black"
                price={41105}
                image="https://images-na.ssl-images-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg"
                rating={4}
            />
        </div>

    </div>
    </>
  );
};

export default Home;
