import Vacancy from "../vacancy-nav-bar/Vacancy";
import "./menu.css";
import phone from '../../assets/phone-icon.png';
import dish1 from '../../assets/img/dishes/d1.jpg';
import dish2 from '../../assets/img/dishes/d2.jpg';
import dish3 from '../../assets/img/dishes/d3.jpg';
import dish4 from '../../assets/img/dishes/d4.jpg';
import dish5 from '../../assets/img/dishes/d5.jpg';
import dish6 from '../../assets/img/dishes/d6.jpg';
import dish7 from '../../assets/img/dishes/d7.jpg';
import dish8 from '../../assets/img/dishes/d8.jpg';

const handlePhoneClick = () => {
  // Add your phone click handling logic here
}

const menuItems = [
  { img: dish1, name: "Карбон ла Віста", description: "вершки, копчений бекон, сир Пармезан", price: "99" },
  { img: dish2, name: "Паста 4 сира", description: "сир камамбер, сир дор-блю, сир брі, сир пармезан", price: "99" },
  { img: dish3, name: "Паста Болоньєзе", description: "рагу болоньєзе зі свино-яловичим фаршем, сир Пармезан", price: "99" },
  { img: dish4, name: "Паста з лісовим гірком та горгонзолою", description: "вершки, горгонзола, фетучіне паста", price: "99" },
  { img: dish5, name: "Паста з грибами, куркою та вершковим соусом", description: "гриби гливи, курка, печінка", price: "99" },
  { img: dish6, name: "Паста з морепродуктами", description: "соус А-ля карбонара вершковий, вино, часник, перець чилі, мікс морепродуктів", price: "159" },
  { img: dish7, name: "Паста орзо з морепродуктами", description: "масло, соус песто, чорнослойка, цитрусова восміжога", price: "139" },
  { img: dish8, name: "Чорна паста з тигровими креветками", description: "соус вино білое/вершки класік, вино, часник, чилі, тигрові креветки", price: "159" },
];

const Menu = () => {
  return (
    <section className="menu">
      <div className="container">
        <Vacancy />
        <div className="menu__menu-navigation">
          <ul className="menu__menu-list">
            <li className="menu__menu-item">Pasta</li>
            <li className="menu__menu-item">Ravioli</li>
            <li className="menu__menu-item">Lasagna</li>
            <li className="menu__menu-item">Salads</li>
            <li className="menu__menu-item">Brunches</li>
            <li className="menu__menu-item">Breakfasts</li>
            <li className="menu__menu-item">Soups</li>
          </ul>
        </div>
        <div className="menu__dishes-grid">
          {menuItems.map((item, index) => (
            <div key={index} className="menu__dishes-grid-item">
              <img src={item.img} alt={item.name} />
              <div className="menu__dishes-grid-item-desc">
                <h3 className="menu__dishes-grid-item-name">{item.name}</h3>
                <p className="menu__dishes-grid-item-text">{item.description}</p>
                <div className="menu__dishes-grid-item-priceOrder">
                  <p className="menu__dishes-grid-item-price">{item.price} грн</p>
                  <button onClick={handlePhoneClick}>
                    <img src={phone} alt="phone" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu