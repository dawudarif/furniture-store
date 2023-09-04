import { useEffect, useState } from 'react';
import '../styles/Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState<null | Array<any>>(null);
  const [totalPrice, setTotalPrice] = useState<null | number>(null);

  const getCartItems = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  };

  const calculateTotalPrice = () => {
    const total = cartItems?.reduce((total, item) => {
      return total + parseFloat(item.price) * item.quantity;
    }, 0);
    setTotalPrice(total);
  };

  const itemQuantity = (item: any, newQuantity: any) => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');

    const updatedCart = storedCart.map((cartItem: any) => {
      if (cartItem.id === item.id) {
        // Update the quantity, ensuring it doesn't go below 1
        cartItem.quantity = Math.max(cartItem.quantity + newQuantity, 1);
      }
      return cartItem;
    });

    // Store the updated cart back in localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    calculateTotalPrice();
  };

  useEffect(() => {
    getCartItems();
  }, []);

  useEffect(() => {
    calculateTotalPrice();
  }, []);

  return (
    <div className='cart-container'>
      <div className='cart-header'>
        <h2>Your Cart</h2>
      </div>
      <div className='cart-items'>
        {cartItems?.length !== 0 &&
          cartItems?.map((item) => (
            <div key={item.id}>
              <div className='cart-item flex'>
                <img src={item.img[0]} alt={item.title} />
                <div className='item-details'>
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Subtotal: ${item.price * item.quantity}</p>
                  <span className='flex amount-button'>
                    <button
                      className='flex'
                      onClick={() => itemQuantity(item, -1)}
                    >
                      -
                    </button>
                    <p className='flex'>{item.quantity}</p>
                    <button
                      className='flex'
                      onClick={() => itemQuantity(item, 1)}
                    >
                      +
                    </button>
                  </span>
                </div>
              </div>
              <div className='line'></div>
            </div>
          ))}
      </div>
      <div className='cart-footer'>
        <p>Total: ${totalPrice}</p>
        <button className='checkout-button'>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
