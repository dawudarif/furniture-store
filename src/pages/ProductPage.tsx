import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopData } from '../components/Data/ShopData';
import TrendingItem from '../components/TrendingItems';
import '../styles/ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState<ShopData>();
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [cartItems, setCartItems] = useState<Array<CartData>>([]);
  const [itemQuantity, setItemQuantity] = useState<number>(1);
  const [addCartValues, setAddCartValues] = useState<any>();

  const getItem = async () => {
    try {
      const fetchedData = ShopData.find((item) => item.id === Number(id));

      if (fetchedData) {
        setItem(fetchedData);
        setAddCartValues({
          id: Number(fetchedData.id),
          title: fetchedData.title,
          img: fetchedData.img[0],
          price: fetchedData.price,
        });
      } else {
        console.log('Item not found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getCartItems = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  };

  const cartIds: number[] = cartItems?.map((cartItem: CartData) => {
    return cartItem.id;
  });

  const addToCart = (addCartValues: CartData) => {
    console.log(addCartValues);

    if (addCartValues) {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      cart.push(addCartValues);
      localStorage.setItem('cart', JSON.stringify(cart));
      getCartItems();
    }
  };

  const removeCartItem = (id: number) => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = storedCart.filter((item: any) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleQuantityChange = (num: number) => {
    if (num === -1 && itemQuantity === 1) {
      return;
    }
    setItemQuantity(itemQuantity + num);
  };

  useEffect(() => {
    getCartItems();
    getItem();
  }, []);

  return (
    <>
      <section className='product-page flex'>
        <div className='flex img-parent'>
          <img
            src={item?.img[imgIndex]}
            style={{ color: '#272116' }}
            alt={item?.title}
          />
          <div className='flex img-child'>
            {item?.img.map((img, i) => (
              <img
                onMouseEnter={() => {
                  setImgIndex(i);
                }}
                onMouseLeave={() => {
                  setImgIndex(0);
                }}
                key={i}
                src={img}
                alt='img'
              />
            ))}
          </div>
        </div>
        <div className='details-container'>
          <h1>{item?.title}</h1>
          <h3>{item?.desc}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            incidunt rerum sint distinctio est placeat natus, rem veritatis
            numquam earum libero. Tempora accusamus ea at nostrum harum
            cupiditate animi sequi quod, minus eius. Minus veniam repellat
            corporis quidem
          </p>
          <div className='quantity-box flex'>
            <h3>Quantity:</h3>
            <span className='value-buttons flex'>
              <button
                className='minus'
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <p className='flex'>{itemQuantity}</p>
              <button className='plus' onClick={() => handleQuantityChange(1)}>
                +
              </button>
            </span>
          </div>
          <h6 className='price'>${Number(item?.price) * itemQuantity}</h6>
          <div className='button-box flex'>
            <button className='buy-button'>BUY</button>
            {cartIds.includes(Number(item?.id)) ? (
              <button
                onClick={() => removeCartItem(Number(item?.id))}
                className='added-button'
              >
                Added
              </button>
            ) : (
              addCartValues && (
                <button
                  onClick={() =>
                    addToCart({ ...addCartValues, quantity: itemQuantity })
                  }
                  className='cart-button'
                >
                  Add To Cart
                </button>
              )
            )}
          </div>
        </div>
      </section>
      <TrendingItem />
    </>
  );
};

export default ProductPage;