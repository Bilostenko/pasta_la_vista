import React, { useState } from 'react';
import './header.css'
import phone from '../../assets/phone-icon.png'
import cart from '../../assets/cart-icon.png'
import CartDrawer from '../drawer/Drawer';
import { Link } from 'react-router-dom';

const handlePhoneClick = () => {

};

const Header = () => {

  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleCartClick = () => {
    setDrawerVisible(true);
  };

  const handleCloseDrawer = () => {
    setDrawerVisible(false);
  };


  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__row">
          <div className="header__logo">
            <span>PASTA</span>
            <p>la vista baby</p>
          </div>
          <nav className="header__nav">
            <ul>
              <li>
                <Link to="/about" className='nunito'>Про нас</Link>
              </li>
              <li>
                <Link to="/menu" className='nunito'>Меню</Link>
              </li>
              <li>
                <Link to="/contacts" className='nunito'>Контакти</Link>
              </li>
              <li>
                <a href="#" className='nunito'>Резерв столика</a>
              </li>
            </ul>
          </nav>
          <div className="header__actionBtns">
            <button onClick={handlePhoneClick}>
              <img src={phone} alt="phone" />
            </button>
            <button onClick={handleCartClick}>
              <img src={cart} alt="cart" />
            </button>
          </div>
        </div>
      </div>
      <CartDrawer visible={drawerVisible} onClose={handleCloseDrawer} />
    </header>
  )
}

export default Header