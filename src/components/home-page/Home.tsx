import React from 'react';
import Title from '../title/Title';
import GoToMenu from '../go-to-menu/GoToMenu';
import Vacancy from '../vacancy-nav-bar/Vacancy';
import Format from '../format/Format';
import Instagram from '../instagram/Instagram';
import Contacts from '../contacts/Contacts';
const Home: React.FC = () => {
  return (
    <section>
      < Title />
      < GoToMenu />
      < Vacancy />
      < Format />
      < Instagram />
      < Contacts />
    </section>
  );
}

export default Home;
