// addressSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'; 
import type { RootState } from './store';

// Define the Address type
interface Address {
  address: string;
  city: string;
  zip: string;
}

interface AddressState {
  addresses: Address[];
}

const initialState: AddressState = {
  addresses: [], 
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    addAddress: (state, action: PayloadAction<Address>) => {
      state.addresses.push(action.payload);
    },
  },
});

export const { addAddress } = addressSlice.actions;
export const selectAddresses = (state: RootState) => state.address.addresses;
export default addressSlice.reducer;
