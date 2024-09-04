import './instagram.css'
import {instaImage} from '../../data/data'

interface InstaItem {
  image: string;
}

const Instagram = () => {

  const { images }: { images: InstaItem[] } = instaImage();


  return (
    <section className="instagram">
      <div className="container">
        <h2 className="instagram__title">Follow us in Instagram</h2>
        <p className="instagram__desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        <button className="btn">Instagram</button>
        <div className="instagram__picture-wrapper">
          <ul className="instagram__grid-container">
            {images.map((item, index) => (
              <li className="instagram__grid-item" key={index}><img src={item.image} alt="InstaImage" /></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Instagram