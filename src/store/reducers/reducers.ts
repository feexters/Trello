import { combineReducers } from "redux";
import { user } from 'store/slices'

export const reducer = combineReducers({
  user: user.reducer,
});