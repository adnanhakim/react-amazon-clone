import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {
   const [{ basket }] = useStateValue();

   return (
      <nav className="header">
         <Link to="/">
            <img
               className="header-logo"
               src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
               alt=""
            />
         </Link>

         <div className="header-search">
            <input type="text" className="header-search-input" />
            <SearchIcon className="header-search-icon" />
         </div>

         <div className="header-nav">
            <Link to="/login" className="header-link">
               <div className="header-option">
                  <span className="header-option-line-1">Hello, Adnan</span>
                  <span className="header-option-line-2">Sign in</span>
               </div>
            </Link>

            <Link to="/" className="header-link">
               <div className="header-option">
                  <span className="header-option-line-1">Returns</span>
                  <span className="header-option-line-2">&amp; Orders</span>
               </div>
            </Link>

            <Link to="/" className="header-link">
               <div className="header-option">
                  <span className="header-option-line-1">Your</span>
                  <span className="header-option-line-2">Prime</span>
               </div>
            </Link>

            <Link to="/checkout" className="header-link">
               <div className="header-option-basket">
                  <ShoppingBasketIcon />
                  <span className="header-option-line-2 header-basket-count">
                     {basket?.length}
                  </span>
               </div>
            </Link>
         </div>
      </nav>
   );
}

export default Header;
