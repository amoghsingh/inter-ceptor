import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    fetchCards: (state = initialState, payload) => {
      return { ...state, cards: payload.payload };
    },
    incrementQty: (state = initialState, { payload }) => {
      let updatedObj = state.cards.map((item) => {
        if (item.id === payload) {
          let incQty = item.qty + 1;
          return { ...item, qty: incQty };
        } else {
          return item;
        }
      });
      return { ...state, cards: updatedObj };
    },
    decrementQty: (state = initialState, { payload }) => {
      let updatedObj = state.cards.map((item) => {
        if (item.id === payload) {
          let decQty = item.qty - 1;
          return { ...item, qty: decQty };
        } else return item;
      });
      return { ...state, cards: updatedObj };
    },
  },
});

export const { fetchCards, incrementQty, decrementQty } = cardSlice.actions;
export const getAllCards = (state) => state.cards.cards;
export default cardSlice.reducer;
