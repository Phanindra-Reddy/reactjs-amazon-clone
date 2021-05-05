import React,{useState, useEffect} from 'react';
import '../styles/Payment.css';

import {Link, useHistory} from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from './StateProvider';
import {getBasketTotal} from './reducer';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from './axios';
import {db} from '../firebase';


const Payment = () => {
    
    const [{basket,user}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);
    const history = useHistory();

    let items;

    if(basket.length === 0){
        items = `0 items`;
    }else if(basket.length ===1 ){
        items = `1 item`
    }else{
        items = `${basket?.length} items`
    }

    useEffect(()=>{
        const getClientSecret = async () => {
            const response = await axios({
                method:'post',
                url:`/payments/create?total=${getBasketTotal(basket)*100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket]);

    console.log('the secret is >>>', clientSecret);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {

            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket:basket,
                    amount:paymentIntent.amount,
                    created:paymentIntent.created,
                })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type:"EMPTY_BASKET"
            })

            history.replace('/orders')
        })
    }

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }
    

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>Checkout (<Link to="/checkout">{items}</Link>)</h1>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user? `${user?.email}` : `Hello, Guest`}</p>
                        <p>H.No : 23-155/1</p>
                        <p>Subedari, Hanamkonda</p>
                        <p>Telangana, India</p>
                        <p>506001</p>
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment-items">
                        {
                            basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <p>Card details</p>
                            <CardElement onChange={handleChange}/>

                            <div className="payment_total">
                                <CurrencyFormat
                                    renderText = {(value) => (
                                        <>
                                            <h5>Orders Total: <strong>{value}</strong></h5>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator = {true}
                                    prefix={"₹"}
                                />
                                <button disabled={processing || disabled || succeeded} type="submit">
                                    <span>
                                        {processing ? <p>Processing</p> : 'Buy Now'}
                                    </span>
                                </button>
                            </div>
                            
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment;
