import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartLength: 0,
  },

  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.cartLength = state.cartLength + 1;
    },

    increaseItem: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      });
      state.cartLength = state.cartLength + 1;
    },

    decreaseItem: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            count: item.count - 1,
          };
        }
        return item;
      });
      state.cartLength = state.cartLength - 1;
    },

    clearCart: (state) => {
      state.items = [];
      state.cartLength = 0;
    },
  },
});

export const { addItem, removeItem, clearCart, increaseItem, decreaseItem } =
  cartSlice.actions;
export default cartSlice.reducer;
