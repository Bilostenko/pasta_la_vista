import React, { useState } from 'react';
import './header.css'
import phone from '../../assets/phone-icon.png'
import cart from '../../assets/cart-icon.png'
import CartDrawer from '../drawer/Drawer';
import { NavLink } from 'react-router-dom';

const handlePhoneClick = () => {

};

const Header: React.FC = () => {

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
            <NavLink to="/" className="logo-link">
              <span>PASTA</span>
              <p>la vista baby</p>
            </NavLink>
          </div>
          <nav className="header__nav">
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? 'nunito active' : 'nunito'} >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'nunito active' : 'nunito'}>
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu" className={({ isActive }) => isActive ? 'nunito active' : 'nunito'}>
                  MENU
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacts" className={({ isActive }) => isActive ? 'nunito active' : 'nunito'} >
                  CONTACTS
                </NavLink>
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