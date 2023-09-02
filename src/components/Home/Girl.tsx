import girlPic from '../../assets/girl.svg';
import '../../styles/Girl.css';

const Girl = () => {
  return (
    <section className='flex girl-section'>
      <div className='text-section'>
        <h1>Beautify Your Space</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          cupiditate, possimus animi, incidunt amet molestias quisquam earum
          recusandae ducimus facere eos deleniti harum itaque maiores officiis
          magni enim omnis natus!
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
