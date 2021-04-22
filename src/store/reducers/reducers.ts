import { combineReducers } from "redux";
import { user } from 'store/slices'
import { columns } from 'store/slices'
import { cards } from 'store/slices'
import { comments } from 'store/slices'

export const reducer = combineReducers({
  user: user.reducer,
  columns: columns.reducer,
  cards: cards.reducer,
  comments: comments.reducer
});