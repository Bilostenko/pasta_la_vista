import './vacancy.css'
import background from '../../assets/img/vacancy_bckgrnd.jpg'
import arrow from '../../assets/arrow-icon.png'

const Vacancy = () => {
  return (
    <section className="vacancy">
      <div className="container">
        <div className="wrapper wrapper__vacancy">
          <img src={arrow} alt="arrow" />
          <img src={background} alt="background" />
          <div className="vacancy__wrapper">
            <h2 className="vacancy__title">We have a vacancy for a cashier-barista!</h2>
            <ul className="vacancy__skills">
              <li>preferably with work experience</li>
              <li>age under 20 years</li>
            </ul>
            <h2 className="vacancy__contacts">+380 96 997 6644</h2>
          </div>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </section>
  )
}

export default Vacancy