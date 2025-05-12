import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity++;
      } else {
        const cloneProduct = { ...action.payload, quantity: 1 };
        state.push(cloneProduct);
      }
    },
    addToQuntity: (state, action) => {
      for (let i in state) {
        if (state[i].id === action.payload.id) {
          state[i].quantity++;
        }
      }
    },
    subFromQuntity: (state, action) => {
      for (let i in state) {
        if (state[i].id === action.payload.id) {
          if (state[i].quantity === 1)
            return state.filter((product) => product.id !== action.payload.id);
          else state[i].quantity--;
        }
      }
    },
  },
});

export const { addToCart, addToQuntity, subFromQuntity } = cartSlice.actions;
export default cartSlice.reducer;
