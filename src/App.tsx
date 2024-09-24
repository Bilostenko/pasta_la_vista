import React from 'react';
import GoToMenu from './components/go-to-menu/GoToMenu';
import Header from './components/header/Header';
import Title from './components/title/Title';
import Vacancy from './components/vacancy-nav-bar/Vacancy'
import Format from './components/format/Format'
import Instagram from './components/instagram/Instagram';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer'
import AboutUs from './components/about-us/AboutUs';

function App() {
  return (
    <div className="App">
      < Header />
      {/* < Title />
      < GoToMenu />
      < Vacancy />
      < Format />
      < Instagram />
      < Contacts /> */}
      < AboutUs />
      < Footer />
    </div>
  );
}

export default App;
