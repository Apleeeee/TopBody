import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export type ILanguage = "en" | "ru";

export interface ISettingsState {
  currentTheme: "dark" | "light";
  currentLanguage: ILanguage;
}

const initialState: ISettingsState = {
  currentTheme: "dark",
  currentLanguage: "en",
};

export const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<"dark" | "light">) => {
      state.currentTheme = action.payload;
    },
    setCurrentLanguage: (state, action: PayloadAction<"en" | "ru">) => {
      state.currentLanguage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTheme, setCurrentLanguage } = settingSlice.actions;

export const selectCurrentTheme = (state: RootState) =>
  state.settings.currentTheme;

export const selectCurrentLanguage = (state: RootState) =>
  state.settings.currentLanguage;

export default settingSlice.reducer;
