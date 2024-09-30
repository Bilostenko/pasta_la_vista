import Vacancy from "../vacancy-nav-bar/Vacancy";

const Menu = () => {
  return (
    <section className="menu">
      <div className="container">
        < Vacancy />
        <div className="menu__menu-navigation">
          <ul className="menu__menu-list">
            <li className="menu__menu-item">Pasta</li>
            <li className="menu__menu-item">Ravioli</li>
            <li className="menu__menu-item">Lasagna</li>
            <li className="menu__menu-item">Salads </li>
            <li className="menu__menu-item">Brunches </li>
            <li className="menu__menu-item">Breakfasts</li>
            <li className="menu__menu-item">Soups</li>
          </ul>
        </div>
        <div className="menu__dishes-list">
          <div className="menu__dishes-list-item">
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu