import { Link } from 'react-router-dom';
import { ShopData } from './Data/ShopData';
import '../styles/TrendingSlider.css';

function TrendingItem() {
  const filteredItems = ShopData.filter((item) => item.id >= 8);
  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className='row-item'>
          <Link
            // onClick={() => window.top(0)}
            to={`/categories/product/${item.id}`}
          >
            <div className='item-header'>
              <img src={item.img[0]} alt='product' />
            </div>
            <div className='item-description'>
              <p>{item.desc}</p>
              <p className='item-price'>{item.price}$</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default TrendingItem;
