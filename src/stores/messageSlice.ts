import { createSlice } from "@reduxjs/toolkit";

export interface ErrorResponse {
  errorCode: string;
  errorMessage: string;
}

export interface BoxMessage {
  userId: string;
  avatar: string;
  fullName: string;
  active: boolean;
}

export interface InitialState {
  status: string;
  boxMessages: Array<BoxMessage>;
  error?: ErrorResponse[] | null;
}

let initialState: InitialState = {
  status: "idle",
  boxMessages: [],
  error: null,
};

const messageSlice = createSlice({
  name: "messageSlice",
  initialState: initialState,
  reducers: {
    OpenMessage: (state, action) => {
      const { userId, fullName, avatar } = action?.payload;
      const index = state.boxMessages.findIndex(
        (state: BoxMessage) => state?.userId === userId
      );
      if (index === -1) {
        state.boxMessages.push({
          userId: userId,
          avatar: avatar,
          fullName: fullName,
          active: true,
        });
      } else {
        state.boxMessages[index].active = true;
      }
    },
    CloseMessage: (state, action) => {
      const { index } = action.payload;
      state.boxMessages.splice(index, 1);
    },
    HideMessage: (state, action) => {
      const { index } = action.payload;
      state.boxMessages[index].active = false;
    },
    UnHideMessage: (state, action) => {
      const { index } = action.payload;
      state.boxMessages[index].active = true;
    },
  },
});

export const { OpenMessage, CloseMessage, HideMessage, UnHideMessage } = messageSlice.actions;

export default messageSlice.reducer;
