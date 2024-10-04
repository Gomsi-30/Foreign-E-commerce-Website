'use client'
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import addressReducer from './addressSlice';
import wishlistReducer from './wishlistSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    address:addressReducer,
    wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch