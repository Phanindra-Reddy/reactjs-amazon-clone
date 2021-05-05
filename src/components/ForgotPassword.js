import React,{useState, useRef} from 'react';
import '../styles/ForgotPassword.css';

import {Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useAuth} from './authentication/AuthContext';

const ForgotPassword = () => {

    const emailRef = useRef();

    const {forgotPassword} = useAuth();

    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    async function onSubmitForm(e){
        e.preventDefault();
        
        try{
            setMessage('')
            setError('')
            setLoading(true)
            await forgotPassword(emailRef.current.value)
            setMessage('Check E-mail for further instructions.')
            
        }catch{
            setError('Failed to reset password')
        }
        setLoading(false)
    }

    return (
        <div className="forgot_passwod">
            <Link to="/">
                <img
                    className="amazon_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="amazon_logo"
                />
            </Link>

            <div className="forgot_passwod_form">
                <h3>Password assistance</h3>
                <small>Enter the email address or mobile phone number associated with your Amazon account.</small>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <form onSubmit={onSubmitForm}>

                    <label>Email or mobile phone number</label><br/>
                    <input type="text" ref={emailRef} className="email"/><br/>

                    <button type="submit">continue</button><br/>

                </form>

                <small> Remembered password?</small>
                <Link to="/login" style={{textDecoration:'none'}}>
                <small className="login">Sign-In</small>
                </Link>
            </div>

            <div className="forgot_password_footer">
                <h4>
                    Has your email address or mobile phone number changed?
                </h4>
                <small>
                    If you no longer use the e-mail address 
                    associated with your Amazon account, 
                    you may contact<a href="/"> Customer Service</a> for 
                    help restoring access to your account.
                </small>
            </div>
        </div>
    )
}

export default ForgotPassword;
