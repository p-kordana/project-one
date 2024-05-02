import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   cart: [],
  cart: [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = new item object
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      //payload = item id
      state.cart.filter((i) => i.pizzaId !== action.payload);
    },
    updateQuantity: {
      prepare(pizzaId, quantity) {
        return {
          payload: {
            id: pizzaId,
            qty: quantity,
          },
        };
      },
      reducer(state, action) {
        const item = state.cart.find((i) => i.pizzaId === action.payload.id);
        item.quantity += action.payload.qty;
      },
    },
    emptyCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, removeItem, updateQuantity, emptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;
