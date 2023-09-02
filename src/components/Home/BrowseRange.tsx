import { BrowseRangeData } from '../Data/BrowseRangeData';
import '../../styles/BrowseRange.css';

const BrowseRange = () => {
  return (
    <>
      <section className='browse-range flex'>
        <div className='heading flex'>
          <h1>Browse The Range</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div className='flex img-div'>
          {BrowseRangeData.map((item) => (
            <span className='flex img-span' key={item.title}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            </span>
          ))}
        </div>
      </section>
      <hr />
    </>
  );
};

export default BrowseRange;
