import React from 'react';
import GoToMenu from './components/go-to-menu/GoToMenu';
import Header from './components/header/Header';
import Title from './components/title/Title';
import Vacancy from './components/vacancy-nav-bar/Vacancy'
import Format from './components/format/Format'

function App() {
  return (
    <div className="App">
      < Header />
      < Title />
      < GoToMenu />
      < Vacancy />
      < Format />
    </div>
  );
}

export default App;
