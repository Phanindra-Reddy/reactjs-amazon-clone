import React,{useEffect} from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
//import PageNotFound from './components/PageNotFound';
import Login from './components/Login';
import Signup from './components/Signup';
import PrivateRoute from './components/authentication/PrivateRoute';
import {AuthProvider} from './components/authentication/AuthContext';
import {auth} from './firebase';
import {useStateValue} from './components/StateProvider';
import ForgotPassword from './components/ForgotPassword';
import Payment from './components/Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './components/Orders';

const promise = loadStripe('pk_test_51In3M2SCmlGptghhbW48hD8MLlx1uQq0k63josRrxZ1qdg4gNBXAJQ77yAJFn5jwKXNeCDuQ61uJWiIsrxMaDwFK00pJ0IzygJ')

function App() {

  const [{basket}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      
      if(user){
        dispatch({
          type:'SET_USER',
          user:user
        })
      } else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })

  }, [])

  return (
    <div className="App">
      <Router>
        <AuthProvider>
      
        <Switch>

          <PrivateRoute path="/" exact>
            <Header/>
            <Home/>
          </PrivateRoute>

          <PrivateRoute path="/checkout" >
            <Header/>
            <Checkout />
          </PrivateRoute>

          <PrivateRoute path="/payment" >
            <Header/>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </PrivateRoute>

          <Route path="/orders" >
            <Header/>
            <Orders />
          </Route>

          {/* <PrivateRoute path="*">
            <Header/>
            <PageNotFound />
          </PrivateRoute> */}

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup/>
          </Route>

          <Route path="/forgot-password">
            <ForgotPassword/>
          </Route>

            {/* <PrivateRoute exact path="/" component={Home}/>
            <PrivateRoute path="/checkout" component={Checkout}/>
 
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/> */}

        </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
