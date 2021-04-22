import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardData } from "lib/interfaces";
import { StorageService } from "lib/utils";
import storageService from "lib/utils/storage-service";

export const cards = createSlice({
  name: "cards",
  initialState: { list: StorageService.getCards() || [] as CardData[] },
  reducers: {
    addCard: (state, action: PayloadAction<CardData>) => {
      const newCard = action.payload;
      state.list.push(newCard);
      storageService.addCards(state.list);
    },
    setCardTitle: (state, action: PayloadAction<{id: string, value: string}>) => {
      const { id, value } = action.payload;
      console.log(value)
      state.list.forEach((elem) => {
        if (elem.id === id) {
          elem.title = value;
        }
      });
      StorageService.addCards(state.list);
    },
    setCardDescription: (state, action: PayloadAction<{id: string, value: string}>) => {
      const { id, value } = action.payload;
      state.list.forEach((elem) => {
        if (elem.id === id) {
          elem.description = value;
        }
      });
      StorageService.addCards(state.list);
    },
    deleteCard: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.list = state.list.filter(elem => elem.id !== id);
      StorageService.addCards(state.list);
    },
  },
});

export const { addCard, setCardTitle, setCardDescription, deleteCard } = cards.actions;
