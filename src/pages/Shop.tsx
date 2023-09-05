import '../styles/Shop.css';
import { ShopData } from '../components/Data/ShopData';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [displayTags, setDisplayTags] = useState<string[]>(['All']);
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const filteredShopData =
    selectedTag !== 'All'
      ? ShopData.filter((item) => item.type === selectedTag)
      : ShopData;

  useEffect(() => {
    calculateTags(ShopData);
  }, []);

  const calculateTags = (shopData: any) => {
    let newTags = shopData.map((item: any) => item.type);
    const uniqueFurniture = new Set(newTags);
    const furnitureArray = Array.from(uniqueFurniture);
    furnitureArray.unshift('All');
    setDisplayTags(furnitureArray as string[]);
  };

  return (
    <main className='flex shop'>
      <h1>{selectedTag}</h1>
      {displayTags.length !== 0 && (
        <p className='tags flex'>
          {displayTags.map((item, i) => (
            <span
              className='tag flex'
              key={i}
              style={
                selectedTag === item
                  ? { backgroundColor: 'var(--grey)', color: '#fff' }
                  : {}
              }
              onClick={() => setSelectedTag(item)}
            >
              {item}
            </span>
          ))}
        </p>
      )}

      <div className='grid'>
        {filteredShopData.map((item) => (
          <a href={`/shop/${item.id}`} key={item.id} className='item'>
            <img src={item.img[0]} alt={item.title} />
            <div className='text-container'>
              <h4>{item.title}</h4>
              <h6>${item.price}</h6>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
};

export default Shop;
