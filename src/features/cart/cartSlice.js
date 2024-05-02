import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   cart: [],
  items: [
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
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      //payload = item id
      state.items.filter((i) => i.pizzaId !== action.payload);
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
        const item = state.items.find((i) => i.pizzaId === action.payload.id);
        item.quantity += action.payload.qty;
      },
    },
    emptyCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateQuantity, emptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;
