import { useEffect, useState } from 'react';
import '../styles/Cart.css';
import { RxCross2 } from 'react-icons/rx';

const Cart = () => {
  const [cartItems, setCartItems] = useState<null | Array<any>>(null);
  // const [totalPrice, setTotalPrice] = useState<number>(0);

  const getCartItems = () => {
    const storedCart = localStorage.getItem('cart');
    // console.log(storedCart);

    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
      // calculateTotalPrice();
    }
  };

  const calculateTotalPrice = () => {
    console.log('render');
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
  };

  const removeCartItem = (id: number) => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = storedCart.filter((item: any) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    calculateTotalPrice();
  };

  useEffect(() => {
    getCartItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // useEffect(() => {
  //   calculateTotalPrice();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
                      <p>Price: ${item.price}</p>
                      <p>
                        Subtotal: ${(item.price * item.quantity).toFixed(2)}
                      </p>
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
            <button className='clear-all' onClick={clearAll}>
              Clear All
            </button>
            <button className='checkout-button'>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
