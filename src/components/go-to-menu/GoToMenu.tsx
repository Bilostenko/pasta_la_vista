import './goToMenu.css'
import image from '../../assets/img/goToMenu.jpg'
const GoToMenu = () => {

  return (
    <section className="goToMenu">
      <div className="container container__color">
        <div className="wrapper goToMenu__wrapper">
          <div className="goToMenu__text">
            <h2 className="goToMenu__title">Our menu</h2>
            <p className="goToMenu__description nunito">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <button className="btn btn__goToMenu">Go To Menu</button>
          </div>
          <img src={image} alt="image" className="goToMenu__image" />
        </div>
      </div>
    </section>

  )
}

export default GoToMenu