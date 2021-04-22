import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ColumnData } from "lib/interfaces";


const initialColumns: ColumnData[] = [
  {id: '0', title: "TODO"},
  {id: '1', title: "In Progress",},
  {id: '2', title: "Testing"},
  {id: '3', title: "Done"}
];

export const columns = createSlice({
  name: "columns",
  initialState: { list: initialColumns },
  reducers: { 
    setColumnTitle: (state, action: PayloadAction<ColumnData>) => {
      const {id, title} = action.payload
      state.list.forEach(elem => {
          if (elem.id === id) {
            elem.title = title
          }
      })
    },
  },
});

export const { setColumnTitle } = columns.actions