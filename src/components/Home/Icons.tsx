import { iconsData } from '../Data/IconsData';
import '../../styles/Icons.css';

const Icons = () => {
  return (
    <section className='icons flex'>
      {iconsData.map((icon) => (
        <div key={icon.id} className='single-icon flex'>
          <img src={icon.img} alt={icon.title} />
          <span>
            <h3>{icon.title}</h3>
            <p>{icon.desc}</p>
          </span>
        </div>
      ))}
    </section>
  );
};

export default Icons;
