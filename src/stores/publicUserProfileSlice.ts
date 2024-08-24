import { Data } from "./userSlice";
import { GetProfilePublicApi } from "@/apis/user/profile-public";
import { GetStatusFriendApi, PostAddFriendApi } from "@/apis/user/user";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { stat } from "fs";

export interface GetProfileUserData {
  userId: string;
}
export interface GetStatusFriendData {
  userId: string;
}
export interface PostStatusFriendData {
  userId: string;
}

export interface DataProfile {
  userId: string;
  fullName: string;
  cropCoverPhoto?: string;
  cropAvatar?: string;
}

export interface ErrorResponse {
  errorCode: string;
  errorMessage: string;
  data?: DataProfile;
}

export interface InitialState {
  status: string;
  statusAddFriendStatus?: string;
  statusGetFriendStatus?: string;
  error?: ErrorResponse[] | null;
  data: DataProfile;
}

let initialState: InitialState = {
  status: "idle",
  statusAddFriendStatus: "idle",
  statusGetFriendStatus: "idle",
  error: null,
  data: {
    userId: "",
    fullName: "",
    cropCoverPhoto: "",
    cropAvatar: "",
  },
};

export const getProfileUserThunk = createAsyncThunk(
  "user/getProfileUser",
  async (data: GetProfileUserData, { rejectWithValue }) => {
    try {
      const response = await GetProfilePublicApi(data);
      if (response?.data?.error === 1) {
        return rejectWithValue(response?.data?.data as ErrorResponse[]);
      }
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err?.response?.data?.data as ErrorResponse[]);
    }
  }
);

export const getStatusFriendThunk = createAsyncThunk(
  "user/getStatusFriend",
  async (data: GetStatusFriendData, { rejectWithValue }) => {
    try {
      const response = await GetStatusFriendApi(data);
      if (response?.data?.error === 1) {
        return rejectWithValue(response?.data?.data as ErrorResponse[]);
      }
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err?.response?.data?.data as ErrorResponse[]);
    }
  }
);

export const postAddFriendThunk = createAsyncThunk(
  "user/postAddFriend",
  async (data: PostStatusFriendData, { rejectWithValue }) => {
    try {
      const response = await PostAddFriendApi(data);
      if (response?.data?.error === 1) {
        return rejectWithValue(response?.data?.data as ErrorResponse[]);
      }
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err?.response?.data?.data as ErrorResponse[]);
    }
  }
);

const publicUserProfileSlice = createSlice({
  name: "publicUserProfileSlice",
  initialState: initialState,
  reducers: {
    clearCoverPhotoUser: (state) => {
      if (state.data) {
        state.data.cropCoverPhoto = "";
      }
    },
    setCoverPhotoUser: (state, action) => {
      if (state.data) {
        state.data.cropCoverPhoto =
          action.payload &&
          `${process.env.NEXT_PUBLIC_SERVER}/${process.env.NEXT_PUBLIC_SERVER_GET_IMAGE}${action.payload}`;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfileUserThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProfileUserThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (action.payload?.data) {
          const { cropCoverPhoto, cropAvatar, userId, fullName } =
            action.payload.data;
          state.data.userId = userId;
          state.data.fullName = fullName;
          state.data.cropCoverPhoto = `${process.env.NEXT_PUBLIC_SERVER}/${process.env.NEXT_PUBLIC_SERVER_GET_IMAGE}${cropCoverPhoto}`;
          state.data.cropAvatar = `${process.env.NEXT_PUBLIC_SERVER}/${process.env.NEXT_PUBLIC_SERVER_GET_IMAGE}${cropAvatar}`;
          state.error = null;
        }
      })
      .addCase(getProfileUserThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as ErrorResponse[];
      })
      // =======================
      .addCase(getStatusFriendThunk.pending, (state) => {
        state.statusGetFriendStatus = "loading";
      })
      .addCase(getStatusFriendThunk.fulfilled, (state, action) => {
        state.statusGetFriendStatus = "succeeded";
      })
      .addCase(getStatusFriendThunk.rejected, (state, action) => {
        state.statusGetFriendStatus = "failed";
        state.error = action.payload as ErrorResponse[];
      })
      //  ======================
      .addCase(postAddFriendThunk.pending, (state) => {
        state.statusAddFriendStatus = "loading";
      })
      .addCase(postAddFriendThunk.fulfilled, (state, action) => {
        state.statusAddFriendStatus = "succeeded";
      })
      .addCase(postAddFriendThunk.rejected, (state, action) => {
        state.statusAddFriendStatus = "failed";
        state.error = action.payload as ErrorResponse[];
      });
  },
});

export const { clearCoverPhotoUser, setCoverPhotoUser } =
  publicUserProfileSlice.actions;

export default publicUserProfileSlice.reducer;
