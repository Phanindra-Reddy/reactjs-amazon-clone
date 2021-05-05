import React from 'react';
import "../styles/Header.css";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import GPSOutlinedIcon from '@material-ui/icons/RoomOutlined';
//import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {useAuth} from './authentication/AuthContext';


function Header() {

    const [{basket},dispatch] = useStateValue();
    const {currentUser, logout} = useAuth();

    async function handleUser(){
        if(currentUser){
            await logout();
        }
    }

    return (
        <>
        <div className="header">
            <Link to="/">
                <img
                    className="header_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon_logo"
                />
            </Link>

            <div className="header_delivery_option">
                <span className="header_delivery_top">
                    Deliver to
                </span>
                <span className="header_delivery_bottom">
                    <GPSOutlinedIcon fontSize="small"/>India
                </span>
            </div>

            <div className="header_delivery_search">
                
                <input
                    className="header_searchInput"
                    type="text"
                />
                <SearchOutlinedIcon fontSize="large" className="header_searchIcon"/>
                
            </div>

            <div className="header_nav">
                <Link to={!currentUser && '/login'} style={{color:'white',textDecoration:'none'}}>
                <div onClick={handleUser} className="header_nav_option" >
                    <span className="header_optionLineTop">
                        {currentUser? `Hello, ${currentUser?.email}` : `Hello, Sign in`}
                    </span>
                    <span className="header_optionLineBottom">
                        {currentUser ? `Sign Out` : `Account & Lists`}
                    </span>
                </div>
                </Link>

                <Link to="/orders" style={{color:'white',textDecoration:'none'}}>
                <div className="header_nav_option">
                    <span className="header_optionLineTop">
                        Returns
                    </span>
                    <span className="header_optionLineBottom">
                        &amp; Orders
                    </span>
                </div>
                </Link>

                <div className="header_nav_option">
                    <span className="header_optionLineTop">
                        Your
                    </span>
                    <span className="header_optionLineBottom">
                        Prime
                    </span>
                </div>
            </div>

            <Link to="/checkout">
            <div className="header_basket" style={{color:'white', listStyle:'none'}}>
                <ShoppingCartOutlinedIcon fontSize="large"/>
                <span className="header_optionLineBottom header_basketcount">{basket?.length}</span>
            </div>
            </Link>

        </div>
        </>
    )
}

export default Header;
