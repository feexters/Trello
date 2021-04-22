import { createSlice } from "@reduxjs/toolkit"

export const user = createSlice({
  name: "user",
  initialState: { name: ''},
  reducers: { 
    setUserName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setUserName } = user.actions
