import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import '../styles/TrendingSlider.css';
import TrendingItem from './TrendingItems';

function TrendingSlider() {
  const slideLeft = () => {
    let slider: any = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    let slider: any = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  return (
    <div className='trending'>
      <div className='container'>
        <div className='title-btns'>
          <h3>Trending Now</h3>
          <div className='btns'>
            <button
              title='scroll left'
              className='flex'
              onClick={() => slideLeft()}
            >
              <FaArrowLeft size={25} />
            </button>
            <button
              title='scroll right'
              className='flex'
              onClick={() => slideRight()}
            >
              <FaArrowRight size={25} />
            </button>
          </div>
        </div>
        <div className='row-container' id='slider'>
          <TrendingItem />
        </div>
      </div>
    </div>
  );
}

export default TrendingSlider;
