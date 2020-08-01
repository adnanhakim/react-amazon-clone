import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
   return (
      <Router>
         <div className="app">
            <Switch>
               <Route path="/checkout">
                  <h2>Checkout</h2>
               </Route>
               <Route path="/login">
                  <h2>Login</h2>
               </Route>
               <Route path="/">
                  <Header />
                  <h2>Home Page</h2>
               </Route>
            </Switch>
         </div>
      </Router>
   );
}

export default App;
