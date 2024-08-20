import './title.css'

const Title = () => {
  return (
    <section className="title title__container">
      <div className="container">
        <h1 className="title__title">
          Pasta La <span className="title__baby">baby</span> Vista,
        </h1>
        <p className="title__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        <button className="title__btn">Go to <menu></menu></button>
      </div>
    </section>

  )
}

export default Title