import './format.css';
import { formatList } from '../../data/data';

interface FormatItem {
  name: string;
  desc: string;
  btn: string;
  img: string;
}

const Format = () => {
  
  const { formats }: { formats: FormatItem[] } = formatList();

  return (
    <section className="format">
      <div className="container">
        <h2 className='format__title'>Choose your format</h2>
        <ul className="format__list">
          {formats.map((item, index) => (
            <li
              className="format__list__item"
              key={index}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <h3 className='format__list__item-name'>{item.name}</h3>
              <p className='format__list__item-dec'>{item.desc}</p>
              <button className='btn'>{item.btn}</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Format;
