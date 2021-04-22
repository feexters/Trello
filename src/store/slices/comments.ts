import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentData } from "lib/interfaces";
import { StorageService } from "lib/utils";
import storageService from "lib/utils/storage-service";

export const comments = createSlice({
  name: "comments",
  initialState: { list: StorageService.getComments() || [] as CommentData[] },
  reducers: {
    addComment: (state, action: PayloadAction<CommentData>) => {
      const newComment = action.payload;
      state.list.push(newComment);
      storageService.addComments(state.list);
    },
    setCommentValue: (state, action: PayloadAction<{id: string, value: string}>) => {
      const { id, value } = action.payload;
      state.list.forEach((elem) => {
        if (elem.id === id) {
          elem.value = value;
        }
      });
      StorageService.addComments(state.list);
    },
    deleteComment: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.list = state.list.filter(elem => elem.id !== id)
      StorageService.addComments(state.list);
    },
  },
});

export const { addComment, setCommentValue, deleteComment } = comments.actions;
