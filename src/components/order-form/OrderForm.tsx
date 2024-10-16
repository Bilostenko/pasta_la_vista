import React, { useState } from 'react';
import './orderForm.css';

// ЗРОБИТИ ВИКЛИК ФОРМИ ЗАМОВЛЕННЯ ПО НАТИСКАНББ КОШИКА
interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

const OrderForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cutlery, setCutlery] = useState(0);
  const [comment, setComment] = useState('');

  const orderItems: OrderItem[] = [
    { name: 'Назва страви', price: 99, quantity: 1 },
    { name: 'Назва страви', price: 99, quantity: 1 },
    { name: 'Назва страви', price: 99, quantity: 1 },
  ];

  const totalPrice = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryPrice = 0;

  return (
    <section className="order-form">
      <div className="container container__form">
        <h1 className="title">Making an order</h1>
        <div className="order-form">
          <div className="column">
            <h2 className='order-from__subtitle'>Контакти</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Ваше ім'я*</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Введіть ваше ім'я"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Телефон*</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Введіть ваш телефон"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <h2 className='order-from__subtitle'>Спосіб доставки</h2>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="delivery-method"
                    checked={deliveryMethod === 'delivery'}
                    onChange={() => setDeliveryMethod('delivery')}
                  />
                  Доставка
                </label>
                <label>
                  <input
                    type="radio"
                    name="delivery-method"
                    checked={deliveryMethod === 'pickup'}
                    onChange={() => setDeliveryMethod('pickup')}
                  />
                  Самовивіз
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="address">Адреса*</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Введіть адресу доставки"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <h2 className='order-from__subtitle'>Спосіб оплати</h2>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="payment-method"
                    checked={paymentMethod === 'cash'}
                    onChange={() => setPaymentMethod('cash')}
                  />
                  Готівкою
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment-method"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                  />
                  Карткою
                </label>
              </div>

              <h2 className='order-from__subtitle'>Додатково</h2>
              <div className="form-group">
                <label htmlFor="cutlery">Одноразові прибори</label>
                <input
                  type="number"
                  id="cutlery"
                  min="0"
                  value={cutlery}
                  onChange={(e) => setCutlery(Number(e.target.value))}
                />
              </div>

              <div className="form-group">
                <label htmlFor="comment">Коментар</label>
                <textarea
                  id="comment"
                  placeholder="Введіть коментар"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
            </form>
          </div>

          <div className="column">
            <h2 className='order-from__subtitle'>Ваше замовлення</h2>
            <ul className="order-list">
              {orderItems.map((item, index) => (
                <li key={index} className="order-item">
                  <span>{item.name}</span>
                  <span>{item.price} грн</span>
                  <span>x{item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="total">
              <p>Ціна: {totalPrice} грн</p>
              <p>Доставка: {deliveryPrice} грн</p>
              <p><strong>Вартість: {totalPrice + deliveryPrice} грн</strong></p>
            </div>
            <button type="submit" className="submit-button">Замовити</button>
            <a href="#" className="menu-link">Перейти в меню</a>
          </div>
        </div>
      </div>
    </section>

  );
};

export default OrderForm;
