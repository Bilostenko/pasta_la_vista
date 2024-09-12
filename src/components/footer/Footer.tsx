import './footer.css'
import arrow from '../../assets/arrow-icon.png'
import phone from '../../assets/phone-icon.png'
import cart from '../../assets/cart-icon.png'

const Footer = () => {

  const handleCartClick = () => {
    return
  }
  const handlePhoneClick = () => {
    return
  }

  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-content">
          <div className="header__logo">
            <span>PASTA</span>
            <p>la vista baby</p>
          </div>
          <nav className="footer-nav">
            <a href="#" className="nav-link nunito">About us</a>
            <a href="#" className="nav-link nunito">Menu</a>
            <a href="#" className="nav-link nunito">Contacts</a>
            <a href="#" className="nav-link nunito">Book a table</a>
          </nav>
          <div className="footer-icons">
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
        <p className="footer-text nunito">We look forward to hearing from you and sharing your feedback on social media!</p>
        <button className='btn instagram-button'>Instagram</button>
        <img src={arrow} alt="arrow " className='scroll-top' />
      </div>
    </footer>
  )

}

export default Footer