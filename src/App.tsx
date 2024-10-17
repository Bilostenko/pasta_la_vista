import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AboutUs from './components/about-us-navbar/AboutUs';
import Menu from './components/menu-navbar/Menu';
import ContactsNavBar from './components/contacts-navbar/ContactsNavBar';
import NotFound from './components/not-found/NotFound';
import Home from './components/home-page/Home';
import OrderForm from './components/order-form/OrderForm';
import ScrollToTop from './components/scrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
        <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contacts" element={<ContactsNavBar />} />
          <Route path="/order" element={<OrderForm />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
