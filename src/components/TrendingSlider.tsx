import '../styles/TrendingSlider.css';
import TrendingItem from './TrendingItems';

function TrendingSlider() {
  const slideLeft = () => {
    let slider: any = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider: any = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 235;
  };

  return (
    <div className='trending'>
      <div className='container'>
        <div className='title-btns'>
          <h3>Trending Now</h3>
          <div className='btns'>
            <button title='scroll left' onClick={slideLeft}>
              left{' '}
            </button>
            <button title='scroll right' onClick={slideRight}>
              right
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
