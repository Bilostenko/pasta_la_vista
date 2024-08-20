import './header.css'
import phone from '../../assets/phone-icon.png'
import cart from '../../assets/cart-icon.png'


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
            <img src={phone} alt="phone" />
            <img src={cart} alt="cart" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header