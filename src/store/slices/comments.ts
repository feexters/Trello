import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentData } from "lib/interfaces";


export const comments = createSlice({
  name: "comments",
  initialState: { list: [] as CommentData[] },
  reducers: {
    addComment: (state, action: PayloadAction<CommentData>) => {
      const newComment = action.payload;
      state.list.push(newComment);
    },
    setCommentValue: (state, action: PayloadAction<{id: string, value: string}>) => {
      const { id, value } = action.payload;
      state.list.forEach((elem) => {
        if (elem.id === id) {
          elem.value = value;
        }
      });
    },
    deleteComment: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.list = state.list.filter(elem => elem.id !== id)
    },
  },
});

export const { addComment, setCommentValue, deleteComment } = comments.actions;
