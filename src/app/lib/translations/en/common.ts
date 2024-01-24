import SCREENS from "shared/lib/screen";

export default {
  "Not a member?": "Not a member?",
  Russia: "Russia",
  English: "English",
  [SCREENS.SignIn]: "SignIn",
  [SCREENS.SignUp]: "SignUp",
  [SCREENS.ForgotPassword]: "ForgotPassword",
  [SCREENS.Settings]: "Settings",
} as const;
