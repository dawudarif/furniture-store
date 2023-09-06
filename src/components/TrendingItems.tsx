import { ShopData } from './Data/ShopData';
import '../styles/TrendingSlider.css';

function TrendingItem() {
  const filteredItems = ShopData.filter((item) => item.id >= 8);
  return (
    <>
      {filteredItems.map((item) => (
        <a href={`/shop/${item.id}`} key={item.id} className='item-1'>
          <img src={item.img[0]} alt={item.title} />
          <div className='text-container-1'>
            <h4>{item.title}</h4>
            <h6>${item.price}</h6>
          </div>
        </a>
      ))}
    </>
  );
}

export default TrendingItem;
