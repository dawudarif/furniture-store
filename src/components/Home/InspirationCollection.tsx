import IC1 from '../../assets/one.svg';
import IC2 from '../../assets/two.svg';
import IC3 from '../../assets/three.svg';
import '../../styles/InspirationCollection.css';

const InspirationCollection = () => {
  return (
    <section className='flex ic-section'>
      <h1>Inspiration Collection</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <div className='flex f-img'>
        <img src={IC3} alt='img' className='three' />
        <img src={IC2} alt='img' className='two' />
        <img src={IC1} alt='img' className='one' />
      </div>
    </section>
  );
};

export default InspirationCollection;
