import IC1 from '../../assets/one.jpg';
import IC2 from '../../assets/two.jpg';
import IC3 from '../../assets/three.jpg';
import '../../styles/InspirationCollection.css';

const InspirationCollection = () => {
  return (
    <section className='flex ic-section'>
      <h1>Inspiration Collection</h1>
      <p>
        Elevate Your Space with Pieces that Inspire and Reflect Your Unique
        Style
      </p>
      <div className='flex f-img'>
        <img src={IC3} alt='img' className='three' />
        <img src={IC2} alt='img' className='two' />
        <img src={IC1} alt='img' className='one' />
      </div>
    </section>
  );
};

export default InspirationCollection;
