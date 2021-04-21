import { createSlice } from "@reduxjs/toolkit"
import { StorageService } from "lib/utils"

export const user = createSlice({
  name: "user",
  initialState: { name: StorageService.getUser() },
  reducers: { 
    setUserName: (state, action) => {
      state.name = action.payload;
      StorageService.addUser(action.payload)
    },
  },
});

export const { setUserName } = user.actions
