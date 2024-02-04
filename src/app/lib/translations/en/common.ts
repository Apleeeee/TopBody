import SCREENS from "shared/lib/screen";

export default {
  /*Блок ошибок и их переводов*/
  "This field is required!": "This field is required!",
  "Invalid email address": "Invalid email address",
  "Must be n or more characters long": "Must be {{n}} or more characters long",
  "This field must be number": "This field must be number",
  "This field must be positive": "This field must be positive",

  /*Экраны*/
  [SCREENS.SignIn]: "Sign In",
  [SCREENS.SignUp]: "Sign Up",
  [SCREENS.ForgotPassword]: "Forgot Password",
  [SCREENS.Settings]: "Settings",
  [SCREENS.Main]: "Main",
  [SCREENS.ProfileStatistics]: "Profile Statistics",
  [SCREENS.MyProfile]: "MyProfile",
  [SCREENS.Tab]: "Tab",
  [SCREENS.AuthStack]: "AuthStack",

  /*Страница настройки*/
  Russia: "Russia",
  English: "English",
  "change theme": "change theme",
  "Exit the application": "Exit the application",
  "Language selection": "Language selection",
  dark: "dark",
  light: "light",
  "Changing the theme": "Changing the theme",

  /*Страница входа*/
  "Sign in": "Sign in",
  "Not a member?": "Not a member?",
  "Join now": "Join now",
  Email: "Email",
  Password: "Password",
  "Sign In": "Sign In",
  "Forgot your password?": "Forgot your password?",

  /*Страница регистрации*/
  Join: "Join",
  "Already a member?": "Already a member?",
  ConfirmPassword: "Confirm Password",
  "Yes, I want emails with recommendations, special offers and more.":
    "Yes, I want emails with recommendations, special offers and more.",
  "Join Now": "Join now",
  "By joining TopBody, you accept our Membership agreement, Privacy Policy and Terms of Use.":
    "By joining TopBody, you accept our Membership agreement, Privacy Policy and Terms of Use.",

  /*Страница восстановления пароля*/
  "Don’t worry, it happens to the best of us.":
    "Don’t worry, it happens to the best of us.",
  "Send reset link": "Send reset link",
  "Back to sign in": "Back to sign in",

  /*Страница главная*/
  Search: "Search",
  Statistics: "Statistics",
  Profile: "Profile",

  /* Страница профиля*/
  Height: "Height",
  Weight: "Weight",
  "Apply changes": "Apply changes",
} as const;
