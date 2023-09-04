import '../../styles/HowItWorks.css';
import { HowItWorksData } from '../Data/HowItWorksData';

const HowItWorks = () => {
  return (
    <section className='section-works flex'>
      <div className='text-works flex'>
        <h1>How It Works</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='img-works flex'>
        {HowItWorksData.map((item) => (
          <div className='container' key={item.id}>
            <span className='img-container'>
              <img src={item.img} alt={item.title} />
              <div className='flex'>{item.id}.</div>
            </span>
            <span className='text-container'>
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
