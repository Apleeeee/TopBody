import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  email: string;
  height: number;
  weight: number;
}

export interface IAuthenticationState {
  user: IUser | null;
}

const initialState: IAuthenticationState = {
  user: null,
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser } = authenticationSlice.actions;

export const selectUser = (state: RootState) => state.authentication.user;

export default authenticationSlice.reducer;
