import React from 'react';
import Vacancy from "../vacancy-nav-bar/Vacancy";
import "./menu.css";
import cart from '../../assets/cart-icon.png';
import { menuItems } from '../../data/data';
import { useNavigate } from 'react-router-dom'; 

const Menu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="menu">
      <div className="container">
        <Vacancy />
        <div className="menu__menu-navigation">
          <ul className="menu__menu-list">
            <li className="menu__menu-item">Pasta</li>
            <li className="menu__menu-item">Ravioli</li>
            <li className="menu__menu-item">Lasagna</li>
            <li className="menu__menu-item">Salads</li>
            <li className="menu__menu-item">Brunches</li>
            <li className="menu__menu-item">Breakfasts</li>
            <li className="menu__menu-item">Soups</li>
          </ul>
        </div>
        <div className="menu__dishes-grid">
          {menuItems.map((item, index) => (
            <div key={index} className="menu__dishes-grid-item">
              <img src={item.img} alt={item.name} />
              <div className="menu__dishes-grid-item-desc">
                <h3 className="menu__dishes-grid-item-name">{item.name}</h3>
                <p className="menu__dishes-grid-item-text">{item.description}</p>
                <div className="menu__dishes-grid-item-priceOrder">
                  <p className="menu__dishes-grid-item-price">{item.price} грн</p>
                  <button onClick={()=> navigate('/order')}>
                    <img src={cart} alt="cart" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
