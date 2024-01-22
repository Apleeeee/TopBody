import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "app/model";

export interface ISettingsState {
  currentTheme: "dark" | "light";
}

const initialState: ISettingsState = {
  currentTheme: "dark",
};

export const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<"dark" | "light">) => {
      state.currentTheme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTheme } = settingSlice.actions;

export const selectCurrentTheme = (state: RootState) =>
  state.settings.currentTheme;

export default settingSlice.reducer;
