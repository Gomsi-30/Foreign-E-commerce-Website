import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../data/products'; 
import type { RootState } from './store';

const initialState = {
  cartItems: [] as Product[], 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cartItems.push(action.payload); 
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(item => item.name !== action.payload); 
    },
    clearCart: (state) => {
      state.cartItems = []; 
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const selectCount = (state: RootState) => state.cart.cartItems
export default cartSlice.reducer;
