import { GetProfilePublicApi } from "@/apis/user/profile-public";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface GetProfileUserData {
  email: string;
}

export interface DataProfile {
  userId: string;
  fullName: string;
  cropCoverPhoto?: string;
}

export interface ErrorResponse {
  errorCode: string;
  errorMessage: string;
  data?: DataProfile;
}

export interface InitialState {
  status: string;
  error?: ErrorResponse[] | null;
  data: DataProfile;
}

let initialState: InitialState = {
  status: "idle",
  error: null,
  data: {
    userId: "",
    fullName: "",
    cropCoverPhoto: "",
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
      console.log(err);
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
        const { cropCoverPhoto, ...rest } = action.payload.data;
        state.status = "succeeded";
        state.data = rest;
        state.data.cropCoverPhoto = `${process.env.NEXT_PUBLIC_SERVER}/${process.env.NEXT_PUBLIC_SERVER_GET_IMAGE}${cropCoverPhoto}`;
        state.error = null;
      })
      .addCase(getProfileUserThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as ErrorResponse[];
      });
  },
});

export const { clearCoverPhotoUser, setCoverPhotoUser } =
  publicUserProfileSlice.actions;

export default publicUserProfileSlice.reducer;
