import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ColumnData } from "lib/interfaces";
import { StorageService } from "lib/utils"

export const columns = createSlice({
  name: "columns",
  initialState: { list: StorageService.getColumns() },
  reducers: { 
    changeColumnTitle: (state, action: PayloadAction<ColumnData>) => {
      const {id, title} = action.payload
      state.list.forEach(elem => {
          if (elem.id === id) {
            elem.title = title
          }
      })
      StorageService.addColumns(state.list)
    },
  },
});

export const { changeColumnTitle } = columns.actions