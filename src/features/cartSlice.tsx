import { createSlice } from '@reduxjs/toolkit';

const getCartItems = () => {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    return JSON.parse(storedCart);
  }
};

const getLength = () => {
  let data = getCartItems();
  if (data === undefined || data === null) {
    return 0;
  } else {
    return data.length;
  }
};

const initialState = {
  cartData: getCartItems(),
  length: getLength(),
};

console.log(initialState.cartData);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartData: (state, action) => {
      state.cartData = action.payload;
    },
    setLength: (state, action) => {
      state.length = action.payload;
    },
  },
});

export const { setCartData, setLength } = cartSlice.actions;

export default cartSlice.reducer;
