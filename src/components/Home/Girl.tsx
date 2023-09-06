import girlPic from '../../assets/girl.svg';
import '../../styles/Girl.css';

const Girl = () => {
  return (
    <section className='flex girl-section'>
      <div className='text-section'>
        <h1>Beautify Your Space</h1>
        <p>
          Discover a World of Possibilities: Elevate Your Living Spaces with Our
          Exquisite Furniture Collections. Explore Timeless Designs and
          Unmatched Comfort for Your Home.
        </p>
        <button>Learn more</button>
      </div>
      <div className='image-section'>
        <img src={girlPic} alt='girl' />
        <div className='sphere'></div>
      </div>
    </section>
  );
};

export default Girl;
