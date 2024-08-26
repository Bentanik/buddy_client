import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface ErrorResponse {
  errorCode: string;
  errorMessage: string;
}

export interface InitialNotificationFriendProps {
  userId: string;
  fullName: string;
  cropAvatar: string;
}

export interface InitialState {
  status: string;
  error?: ErrorResponse[] | null;
  countNotification: number;
  initialNotificationFriend?: InitialNotificationFriendProps | null;
}

let initialState: InitialState = {
  status: "idle",
  error: null,
  countNotification: 0,
  initialNotificationFriend: {
    userId: "",
    fullName: "",
    cropAvatar: "",
  },
};

const notificationSlice = createSlice({
  name: "notificationSlice",
  initialState: initialState,
  reducers: {
    setCountNotification: (state, action) => {
      state.countNotification = action.payload.countNotification;
    },
    setNotificationFriend: (state, action) => {
      if (state.initialNotificationFriend) {
        (state.initialNotificationFriend.userId = action.payload.userId),
          (state.initialNotificationFriend.fullName = action.payload.fullName);
        state.initialNotificationFriend.cropAvatar = `${process.env.NEXT_PUBLIC_SERVER}/${process.env.NEXT_PUBLIC_SERVER_GET_IMAGE}${action.payload.cropAvatar}`;
      }
    },
  },
  extraReducers: (builder) => {},
});

export const { setCountNotification, setNotificationFriend } =
  notificationSlice.actions;

export default notificationSlice.reducer;
