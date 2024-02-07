import React from 'react';
import './Header.css';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {NavLink} from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <NavLink to="/">
      <img
        className="header__logo"
        src="
              http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      </NavLink>

      <div className="location">
        <FmdGoodIcon />
        <p className="text">
          Deliver to <span>Egypt</span>
        </p>
      </div>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* Logo */}
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

         <NavLink to='/checkout'>
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span
              className="header__optionLineTwo
          header__basketCount"
            >
             {basket?.length }
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
