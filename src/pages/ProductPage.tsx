import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ShopData } from '../components/Data/ShopData';
import TrendingSlider from '../components/TrendingSlider';
import { setCartData, setLength } from '../features/cartSlice';

import '../styles/ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState<ShopData>();
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [cartItems, setCartItems] = useState<Array<CartData>>([]);
  const [itemQuantity, setItemQuantity] = useState<number>(1);
  const [addCartValues, setAddCartValues] = useState<any>();
  const dispatch = useDispatch();

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
        navigate('*');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getCartItems = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      let parsedData = JSON.parse(storedCart);
      setCartItems(parsedData);
      dispatch(setCartData(parsedData));
      dispatch(setLength(parsedData.length));
    }
  };

  const cartIds: number[] = cartItems?.map((cartItem: CartData) => {
    return cartItem.id;
  });

  const addToCart = (addCartValues: CartData) => {
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
    dispatch(setLength(updatedCart.length));
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
        <div className='details-box'>
          <div className='details-container'>
            <h1>{item?.title}</h1>
            <h3>{item?.desc}</h3>
            <p>
              Delightful tactile feel, enhancing user experience. Sturdy, robust
              support for added durability. Built to last, ensuring reliable
              performance.
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
                <button
                  className='plus'
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </span>
            </div>
            <h6 className='price'>
              ${(Number(item?.price) * itemQuantity).toFixed(2)}
            </h6>
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
          <div className='texture-box flex'>
            <span>
              <h1>Texture</h1>
              <p>{item?.texture}</p>
            </span>
            <span>
              <h1>Weight</h1>
              <p>{item?.weight}</p>
            </span>
            <span>
              <h1>Dimensions</h1>
              <p>{item?.dimensions}</p>
            </span>
          </div>
        </div>
      </section>
      <TrendingSlider />
    </>
  );
};

export default ProductPage;
