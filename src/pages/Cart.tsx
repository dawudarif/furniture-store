import { useEffect, useState } from 'react';
import '../styles/Cart.css';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { setLength, setCartData } from '../features/cartSlice';

const Cart = () => {
  const { cartData } = useSelector((store: any) => store.cart);
  const [cartItems, setCartItems] = useState<null | Array<any>>(cartData);
  const dispatch = useDispatch();

  console.log(cartItems);

  const getCartItems = async () => {
    let data = cartData;
    if (cartData === undefined || cartData.length === 0) {
      setCartItems(null);
    } else {
      setCartItems(data);
    }
  };

  const calculateTotalPrice = () => {
    let total = 0;
    if (cartItems && cartItems.length > 0) {
      total = cartItems.reduce((total, item) => {
        return total + parseFloat(item.price) * item.quantity;
      }, 0);
    }
    const reduced = total.toFixed(2);
    return reduced;
  };

  const itemQuantity = (item: any, newQuantity: any) => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');

    const updatedCart = storedCart.map((cartItem: any) => {
      if (cartItem.id === item.id) {
        cartItem.quantity = Math.max(cartItem.quantity + newQuantity, 1);
      }
      return cartItem;
    });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    calculateTotalPrice();
  };

  const clearAll = () => {
    localStorage.removeItem('cart');
    setCartItems(null);
    calculateTotalPrice();
    dispatch(setCartData(null));
    dispatch(setLength(0));
  };

  const removeCartItem = (id: number) => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = storedCart.filter((item: any) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    setCartItems(updatedCart);
    calculateTotalPrice();
    dispatch(setCartData(updatedCart));
    dispatch(setLength(updatedCart.length));
  };

  useEffect(() => {
    getCartItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='cart-container'>
      <div className='cart-header flex'>
        <h2>Your Cart</h2>
      </div>
      {cartItems === null || cartItems?.length === 0 ? (
        <h1 className='flex no-items'>No items in cart</h1>
      ) : (
        <>
          <div className='cart-items'>
            {cartItems?.length !== 0 &&
              cartItems?.map((item, i) => (
                <div key={item.id}>
                  <div className='cart-item flex'>
                    <img src={item.img} alt={item.title} />
                    <div className='item-details'>
                      <h3>{item.title}</h3>
                      <span className='price-span'>
                        <b>Price:</b>
                        <p>${item.price}</p>
                      </span>
                      <span className='price-span'>
                        <b>Subtotal:</b>
                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                      </span>
                      <span className='flex amount-button'>
                        <button
                          className='flex'
                          onClick={() => itemQuantity(item, -1)}
                        >
                          -
                        </button>
                        <span className='flex'>{item.quantity}</span>
                        <button
                          className='flex'
                          onClick={() => itemQuantity(item, 1)}
                        >
                          +
                        </button>
                      </span>
                      <span
                        className='remove-btn'
                        onClick={() => removeCartItem(item.id)}
                      >
                        <RxCross2 size={26} />
                      </span>
                    </div>
                  </div>
                  {cartItems.length - 1 !== i && <hr />}
                </div>
              ))}
          </div>
        </>
      )}
      <div className='cart-footer'>
        <div className='line'></div>
        <div className='price-head'>
          <p>Total: ${calculateTotalPrice()}</p>
          <div className='btn-container flex'>
            <button className='clear-all flex' onClick={clearAll}>
              Clear All
            </button>
            <button className='checkout-button flex'>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
