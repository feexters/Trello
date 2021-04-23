import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardData } from "lib/interfaces";


export const cards = createSlice({
  name: "cards",
  initialState: { list: [] as CardData[] },
  reducers: {

    addCard: (state, action: PayloadAction<CardData>) => {
      const newCard = action.payload;
      state.list.push(newCard);
    },

    setCardTitle: (state, action: PayloadAction<{id: string, value: string}>) => {
      const { id, value } = action.payload;
      state.list.forEach((elem) => {
        if (elem.id === id) {
          elem.title = value;
        }
      });
    },

    setCardDescription: (state, action: PayloadAction<{id: string, value: string}>) => {
      const { id, value } = action.payload;
      state.list.forEach((elem) => {
        if (elem.id === id) {
          elem.description = value;
        }
      });
    },

    deleteCard: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.list = state.list.filter(elem => elem.id !== id);
    },
  },
});

export const { addCard, setCardTitle, setCardDescription, deleteCard } = cards.actions;
