import SCREENS from "shared/lib/screen";

export default {
  /*Блок ошибок и их переводов*/
  "This field is requaired!": "Это обязательное поле",
  "Invalid email address": "Неверный адрес электронной почты",
  "Must be n or more characters long": "Должно быть {{n}} или более символов",

  /*Экраны*/
  [SCREENS.SignIn]: "Вход",
  [SCREENS.SignUp]: "Регистрация",
  [SCREENS.ForgotPassword]: "Забыли пароль",
  [SCREENS.Settings]: "Настройки",
  [SCREENS.Main]: "Главная",
  [SCREENS.ProfileStatistics]: "ProfileStatistics",
  [SCREENS.MyProfile]: "Профиль",
  [SCREENS.Tab]: "Таб",

  /*Страница настройки*/
  Russia: "Русский",
  English: "Английский",
  "change theme": "смена темы",

  /*Страница входа*/
  "Sign in": "Войти",
  "Not a member?": "Не являетесь участником?",
  "Join now": "Присоединяйся сейчас",
  "Email or username": "Электронная почта или имя пользователя",
  Password: "Пароль",
  "Sign In": "Вход",
  "Forgot your password?": "Забыли пароль?",

  /*Страница регистрации*/
  Join: "Регистрация",
  "Already a member?": "Уже учавствуете?",
  Email: "Электронная почта",
  ConfirmPassword: "Повторите пароль",
  "Yes, I want emails with recommendations, special offers and more.":
    "Да, я хочу получать электронные письма с рекомендациями, специальными предложениями и многим другим.",
  "Join Now": "Зарегестрироваться",
  "By joining TopBody, you accept our Membership agreement, Privacy Policy and Terms of Use.":
    "Присоединяясь к TopBody, вы принимаете наше Соглашение о членстве, Политику конфиденциальности и Условия использования.",

  /*Страница восстановления пароля*/
  "Don’t worry, it happens to the best of us.":
    "Не волнуйтесь, такое случается с лучшими из нас.",
  "Send reset link": "Отправить ссылку для сброса",
  "Back to sign in": "Вернуться для входа в систему",

  /*Страница главная*/
  Search: "Поиск",
  Home: "Главная",
  Statistics: "Статистика",
  Profile: "Профиль",
} as const;
