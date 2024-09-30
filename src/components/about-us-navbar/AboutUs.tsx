import Instagram from "../instagram/Instagram"
import img1 from '../../assets/img/aboutUs1.jpg'
import img2 from '../../assets/img/aboutUs2.jpg'
import './aboutUs.css'
const AboutUs = () => {

  return (
    <section className="aboutUs">
      <div className="container ">
        <h1 className="aboutUs__header">About us</h1>
        <div className="aboutUs_container">
          <div className="aboutUs__left-column">
            <img src={img1} alt="Cafe interior with flowers" className="aboutUs__image" />
            <div className="aboutUs__text nunito">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit. Velit officia consequat.
            </div>
            <div className="aboutUs__text nunito">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit.
            </div>
            <div className="aboutUs__text nunito">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </div>
          </div>
          <div className="aboutUs__right-column">
            <div className="aboutUs__text nunito">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </div>
            <img src={img2} alt="Baked dish" className="aboutUs__image" />
          </div>
        </div>
        < Instagram />
      </div>
    </section>
  )
}

export default AboutUs