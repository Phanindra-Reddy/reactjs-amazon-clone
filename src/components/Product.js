import React from 'react';
import './Home.css';
import { useStateValue } from './StateProvider';

const Product = ({id,title, image, price, rating}) => {

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () =>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    }

    return (
        <div className="Product" key={id}>
            <div className="Product-description">
                <span className="Product-title">{title}</span>
                <span className="Product-price"><small>₹</small><strong>{price}</strong></span>
                <span className="Product-rating">
                    {
                        Array(rating).fill().map((_,i) => (
                            <p> ⭐</p>
                        ))
                    }
                </span>
            </div>
            <img src={image} alt={title} />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product;

/* <div className="product">
    <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        <div className="product_rating">
            {
                Array(rating).fill().map((_,i) => (
                    <p> ⭐</p>
                ))
            }
            <p> ⭐</p>
        </div>
    </div>

    <img
        src={image}
        alt={title}
    />

    <button>Add to Cart</button>

</div> */
