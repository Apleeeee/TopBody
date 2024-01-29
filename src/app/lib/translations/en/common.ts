import SCREENS from "shared/lib/screen";

export default {
  /*Экраны*/
  [SCREENS.SignIn]: "Sign In",
  [SCREENS.SignUp]: "Sign Up",
  [SCREENS.ForgotPassword]: "Forgot Password",
  [SCREENS.Settings]: "Settings",
  [SCREENS.Main]: "Main",
  [SCREENS.ProfileStatistics]: "ProfileStatistics",
  [SCREENS.MyProfile]: "MyProfile",
  [SCREENS.Tab]: "Tab",

  /*Страница настройки*/
  Russia: "Russia",
  English: "English",
  "change theme": "change theme",

  /*Страница входа*/
  "Sign in": "Sign in",
  "Not a member?": "Not a member?",
  "Join now": "Join now",
  "Email or username": "Email or username",
  Password: "Password",
  "Sign In": "Sign In",
  "Forgot your password?": "Forgot your password?",

  /*Страница регистрации*/
  Join: "Join",
  "Already a member?": "Already a member?",
  Email: "Email",
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
  Home: "Home",
  Search: "Search",
  Statistics: "Statistics",
  Profile: "Profile",
} as const;
