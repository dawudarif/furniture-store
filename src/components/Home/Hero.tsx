import '../../styles/Hero.css';

const Hero = () => {
  return (
    <section className='hero flex' id='home'>
      <div className='hero-wrapper'>
        <div className='hero-child'>
          <h5>New Arrival</h5>
          <h1>Discover Our New Collection</h1>
          <p>
            Explore the Latest Trends and Timeless Classics to Elevate Your Home
            Decor
          </p>
          <a href='/shop'>
            <button>BUY NOW</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
