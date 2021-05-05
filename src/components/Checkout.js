import React from 'react';
import '../styles/Checkout.css';

import AdCarousel from './AdCarousel';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import SubTotal from './SubTotal';
import {getBasketTotal} from './reducer';
//import Header from './Header';

const Checkout = () => {

    const [{basket}] = useStateValue();

    let items;

    if(basket.length === 0){
        items = `0 items`;
    }else if(basket.length ===1 ){
        items = `1 item`
    }else{
        items = `${basket?.length} items`
    }

    return (
        <>
        {/* <Header/> */}
        <div className="checkout_container">
        <AdCarousel/>
        
        <div className="checkout_info">
            <p className="info_one">Pay faster for all your shopping needs with Amazon Pay balance</p>
            <p className="info_two">Get Instant refund on cancellations | Zero payment failures</p>
        </div>

        <div className="checkout">

            <div className="checkout_left">
                <h3>Shopping Cart</h3>
                <p>Deselect all items</p>
                {/* <span className="checkout_left_price">
                    <p>Deselect all items</p>
                    <p>Price</p>
                </span> */}
                <hr/>
                {
                    basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                        />
                    ))
                }
                
                <h5 className="checkout_products_subtotal">
                    Subtotal ({items}):₹{getBasketTotal(basket)}
                </h5>
                
            </div>

            <div className="checkout_right">
                <SubTotal renderText={{value:1200}}/>
            </div>

        </div>
        </div>
        </>
    )
}

export default Checkout;
