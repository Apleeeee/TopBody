import SCREENS from "shared/lib/screen";

export default {
  "Not a member?": "Не участник?",
  Russia: "Русский",
  English: "Английский",
  [SCREENS.SignIn]: "Вход",
  [SCREENS.SignUp]: "Регистрация",
  [SCREENS.ForgotPassword]: "Забыли пароль",
  [SCREENS.Settings]: "Настройки",
} as const;
