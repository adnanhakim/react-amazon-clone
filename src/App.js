import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

function App() {
   return (
      <Router>
         <div className="app">
            <Switch>
               <Route path="/checkout">
                  <Header />
                  <h2>Checkout</h2>
               </Route>
               <Route path="/login">
                  <h2>Login</h2>
               </Route>
               <Route path="/">
                  <Header />
                  <Home />
               </Route>
            </Switch>
         </div>
      </Router>
   );
}

export default App;
