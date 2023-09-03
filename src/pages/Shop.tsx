import '../styles/Shop.css';
import { ShopData } from '../components/Data/ShopData';
import { useEffect, useState } from 'react';
import { log } from 'console';

const Shop = () => {
  const [hovered, setHovered] = useState(false);
  const [hoveredID, setHoveredID] = useState<null | number>(null);
  const [displayTags, setDisplayTags] = useState<string[]>(['All']);
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const filteredShopData =
    selectedTag !== 'All'
      ? ShopData.filter((item) => item.type === selectedTag)
      : ShopData;

  const calculateTags = (shopData: any) => {
    setDisplayTags([]);
    let newTags = shopData.map((item: any) => item.type);
    const uniqueFurniture = new Set(newTags);
    const furnitureArray = Array.from(uniqueFurniture);
    let final = furnitureArray.unshift('All');
    setDisplayTags(furnitureArray as string[]);
  };

  useEffect(() => {
    calculateTags(ShopData);
  }, []);

  return (
    <main className='flex shop'>
      <h1>Shop</h1>
      {selectedTag !== 'All' && (
        <p className='bold-head'>Showing results for {selectedTag}</p>
      )}
      {displayTags.length !== 0 && (
        <p className='tags flex'>
          {displayTags.map((item, i) => (
            <span
              className='tag flex'
              key={i}
              style={
                selectedTag === item
                  ? { backgroundColor: '#054c73', color: '#fff' }
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
          <div key={item.id} className='item'>
            <img
              src={hoveredID === item.id && hovered ? item.img[1] : item.img[0]}
              alt={item.title}
              onMouseEnter={() => {
                setHovered(true);
                setHoveredID(item.id);
              }}
              onMouseLeave={() => {
                setHovered(false);
                setHoveredID(null);
              }}
            />
            <div className='text-container'>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <h6>${item.price}</h6>
            </div>
            <button>Cart</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Shop;
