import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, actionPayload) => {
      state.items.push(actionPayload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state) => {},
  },
});

export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
