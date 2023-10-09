import { Link } from 'react-router-dom';
import girlPic from '../../assets/girl.svg';
import '../../styles/Girl.css';

const Girl = () => {
  return (
    <section className='girl-section flex'>
      <div className='girl-wrapper flex'>
        <div className='text-section'>
          <h1>Beautify Your Space</h1>
          <p>
            Discover a World of Possibilities: Elevate Your Living Spaces with
            Our Exquisite Furniture Collections. Explore Timeless Designs and
            Unmatched Comfort for Your Home.
          </p>
          <Link to='/about'>
            <button>Learn more</button>
          </Link>
        </div>
        <div className='image-section'>
          <img src={girlPic} alt='girl' />
          <div className='sphere'></div>
        </div>
      </div>
    </section>
  );
};

export default Girl;
