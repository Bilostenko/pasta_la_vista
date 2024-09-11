import "./contacts.css"
import location from '../../assets/location-icon.png'
import insta from '../../assets/insta-icon.png'


const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container center">
        <h2 className="contacts__title">Contacts</h2>
        <div className="contacts__wrapper">
          <div className="contacts__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172152.96028710096!2d-122.50460899041927!3d47.60882845844912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ed5d155470edbb%3A0x469c6ee4eee96ff6!2sNight%20City!5e0!3m2!1sen!2sua!4v1726062884832!5m2!1sen!2sua"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className="contacts__contacts">
            <h2 className="contacts__city">
              <img src={location} alt="icon" />Night city, Arasaka Waterfront
            </h2>
            <p className="contacts__info nunito">work hours 8am-10pm</p>
            <p className="contacts__info nunito">we accept orders by phone: +380637463899</p>
            <a className="contacts__social" href="#">
              <img src={insta} alt="icon" />
              Follow us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Contacts