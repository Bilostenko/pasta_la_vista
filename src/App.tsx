import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import GoToMenu from './components/go-to-menu/GoToMenu';
import Header from './components/header/Header';
// import Title from './components/title/Title';
// import Vacancy from './components/vacancy-nav-bar/Vacancy'
// import Format from './components/format/Format'
// import Instagram from './components/instagram/Instagram';
// import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer'
import AboutUs from './components/about-us-navbar/AboutUs';
import Menu from './components/menu-navbar/Menu'
import ContactsNavBar from './components/contacts-navbar/ContactsNavBar';
import NotFound from './components/not-found/NotFound';
import Home from './components/home-page/Home';
import OrderCreate from './components/order-create/OrderCreate';

function App() {
  return (
    <div className="App">
      < Header />

      {/* Маршрути */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contacts" element={<ContactsNavBar />} />
          {/* Сторінка за замовчуванням або 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </main >
      < Footer />
    </div >
  );
}

export default App;
