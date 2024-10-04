// redux/wishlistSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../data/products'; 
import type { RootState } from './store';

const initialState = {
  products: [] as Product[], 
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      console.log(action.payload);
      state.products.push(action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<Product>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const selectCount = (state: RootState) => state.wishlist.products;
export default wishlistSlice.reducer;
