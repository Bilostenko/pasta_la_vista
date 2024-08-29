import './header.css'
import phone from '../../assets/phone-icon.png'
import cart from '../../assets/cart-icon.png'

const handleCartClick = () => {
  return
}
const handlePhoneClick = () => {
  return
}

const Header = () => {

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
              <li><a href="#" className='nunito'>About us</a></li>
              <li><a href="#" className='nunito'>Menu</a></li>
              <li><a href="#" className='nunito'>Contacts</a></li>
              <li><a href="#" className='nunito'>Table reserve</a></li>
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
    </header>
  )
}

export default Header