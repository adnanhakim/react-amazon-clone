import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
   const history = useHistory();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const login = (event) => {
      event.preventDefault();

      auth
         .signInWithEmailAndPassword(email, password)
         .then((auth) => {
            history.push('/');
         })
         .catch((e) => alert(e.message));
   };

   const register = (event) => {
      event.preventDefault();

      auth
         .createUserWithEmailAndPassword(email, password)
         .then((auth) => {
            history.push('/');
         })
         .catch((e) => alert(e.message));
   };

   return (
      <div className="login">
         <Link to="/">
            <img
               className="login-logo"
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
               alt=""
            />
         </Link>

         <div className="login-container">
            <h1>Sign In</h1>
            <form action="">
               <h5>Email</h5>
               <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
               />
               <h5>Password</h5>
               <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
               />
               <button className="login-sign-in" type="submit" onClick={login}>
                  Sign In
               </button>
            </form>

            <p>
               By signing-in you agree to Amazon's Conditions of Use and Sale.
               Please see our Privacy Notice, our Cookies Notice and our
               Internet-Based Ads Notice
            </p>
            <button className="login-register" onClick={register}>
               Create your Amazon Account
            </button>
         </div>
      </div>
   );
}

export default Login;
