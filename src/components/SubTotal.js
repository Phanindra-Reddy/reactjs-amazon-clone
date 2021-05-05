import React from 'react';
import '../styles/Checkout.css';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import {getBasketTotal} from './reducer';
import {useHistory} from 'react-router-dom';

function SubTotal() {

    const [{basket}] = useStateValue();
    const history = useHistory();

    let items;

    if(basket.length === 0){
        items = `0 items`;
    }else if(basket.length ===1 ){
        items = `1 item`
    }else{
        items = `${basket?.length} items`
    }
    
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText = {(value) => (
                    <>
                        <small className="subtotal_order_text">
                            <CheckCircleIcon className="small" style={{color:'green',marginRight:'10px'}}/>
                            Your order is eligible for FREE Delivery. Select this option at checkout. Details
                        </small>
                        <h5>Subtotal ({items}):<strong>{value}</strong></h5>
                        <small className="subtotal_gift">
                            <input type="checkbox" /><span>This order contains a gift</span>
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator = {true}
                prefix={"₹"}
            />
            <button onClick={() => history.push('/payment')} className="subtotal_btn"> Proceed to Buy</button>
        </div>
    )
}

export default SubTotal;


