import React from 'react';
import '../styles/CheckoutProduct.css';
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id, image, title, price, rating, hideButton}) => {

    const [{basket}, dispatch] = useStateValue();

    const deleteFromBasket = () => {
        dispatch({
            type:'DELETE_ITEM',
            id:id,
        })
    }

    return (
        <>
        <div className="checkout_product" key={id}>
            <img 
                src={image} 
                alt={title}
                className="checkout_product_image"
            />
            <div className="checkout_product_info">
                <div className="checkout_product_title_price">
                    <p className="checkout_product_title">
                        {title}
                    </p>
                    <p className="checkout_product_price">
                        <small>₹</small>
                        <strong>{price}</strong>
                    </p>
                </div>
                <div className="checkout_product_rating">
                    {
                        Array(rating).fill().map(() => (
                            <p> ⭐</p>
                        ))
                    }
                </div>
                {!hideButton && (<button onClick={deleteFromBasket}>Delete</button> )}
            </div>
        </div>
        <hr/>
        </>
    )
}

export default CheckoutProduct;
