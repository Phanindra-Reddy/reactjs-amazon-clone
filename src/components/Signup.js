import React,{useState, useRef} from 'react';
import '../styles/Signup.css';

import {Alert} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from './authentication/AuthContext';

const Signup = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup} = useAuth();
    const history = useHistory();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function onSubmitForm(e){
        e.preventDefault();
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match!!')
        }

        try{
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push('/')
        }catch{
            setError('Failed to create an account')
        }
        setLoading(false);
    }


    return (
        <div className="signup_page">
            <Link to="/">
                <img
                    className="signup_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="amazon_logo"
                />
            </Link>

            <div className="signup_form">
                <h3>Create account</h3>
                {error && <Alert variant='danger'>{error}</Alert>}
                <form onSubmit={onSubmitForm}>
                    <label>Your name</label><br/>
                    <input type="text" ref={nameRef} className="name"/><br/>

                    <label>Email</label><br/>
                    <input type="text" ref={emailRef} className="email"/><br/>

                    <label>Password</label><br/>
                    <input type="password" ref={passwordRef} className="password" placeholder="At least 6 characters."/><br/>
                    <small>Passwords must be at least 6 characters.</small><br/>

                    <label>Re-enter password</label><br/>
                    <input type="password" ref={passwordConfirmRef} className="re_enter_password" /><br/>

                    <button disabled={loading} type="submit">Create your Amazon account</button><br/>

                    <small className="terms">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</small><br/>
                    
                    <small>Already have an account?</small>
                    <Link to="/login" style={{textDecoration:'none'}}>
                    <small className="login">Sign-In</small>
                    </Link>

                </form>
            </div>

        </div>
    )
}

export default Signup;
