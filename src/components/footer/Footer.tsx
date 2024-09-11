import './footer.css'

const Footer = () => {

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <nav className="footer-nav">
            <a href="#" className="nav-link">About us</a>
            <a href="#" className="nav-link">Menu</a>
            <a href="#" className="nav-link">Contacts</a>
            <a href="#" className="nav-link">Book a table</a>
          </nav>
          <div className="footer-icons">
            <a href="#" className="icon-link phone"></a>
            <a href="#" className="icon-link cart"></a>
          </div>
        </div>
        <p className="footer-text">We look forward to hearing from you and sharing your feedback on social media!</p>
        <a href="#" className="instagram-button">Instagram</a>
        <a href="#" className="scroll-top"></a>
      </div>
    </footer>
  )

}

export default Footer