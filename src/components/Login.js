import React,{useState,useRef} from 'react';
import '../styles/Login.css';

import {Alert} from 'react-bootstrap';
import {Link,useHistory} from 'react-router-dom';
import {useAuth} from './authentication/AuthContext';

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const {login} = useAuth();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function onSubmitForm(e){
        e.preventDefault();
        
        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/')
        }catch{
            setError('Failed to Sign In')
        }
        setLoading(false)
    }

    return (
        <div className="login_page">
            <Link to="/">
                <img
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="amazon_logo"
                />
            </Link>

            <div className="login_form">
                <h3>Sign-In</h3>
                {error && <Alert variant="danger">{error}</Alert>}
                <form onSubmit={onSubmitForm}>
                    <label>Email or mobile phone number</label><br/>
                    <input type="text" ref={emailRef} className="email"/><br/>

                    <label>Password</label><br/>
                    <input type="password" ref={passwordRef} className="password"/><br/>

                    <button type="submit">Sign-In</button><br/>

                    <small>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</small><br/>

                    <Link to="/forgot-password" style={{textDecoration:'none'}}>
                        <small className="forgot_pwd">Forgot your password?</small>
                    </Link>

                </form>
            </div>

            <div className="login_bottom">
                <h5>New to Amazon?</h5>
                <Link to="/signup">
                    <button disabled={loading} className="signup">Create your Amazon account</button>
                </Link>
            </div>

        </div>
    )
}

export default Login;
