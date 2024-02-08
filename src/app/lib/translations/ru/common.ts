import SCREENS from "shared/lib/screen";

export default {
  /*Блок ошибок и их переводов*/
  "This field is required!": "Это обязательное поле",
  "Invalid email address": "Неверный адрес электронной почты",
  "Must be n or more characters long": "Должно быть {{n}} или более символов",
  "This field must be number": "Это поле обязательно должно быть числовым",
  "This field must be positive": "Это поле не должно быть меньше 0",

  /*Экраны*/
  [SCREENS.SignIn]: "Вход",
  [SCREENS.SignUp]: "Регистрация",
  [SCREENS.ForgotPassword]: "Забыли пароль",
  [SCREENS.Settings]: "Настройки",
  [SCREENS.Main]: "Главная",
  [SCREENS.ProfileStatistics]: "Статистика профиля",
  [SCREENS.MyProfile]: "Профиль",
  [SCREENS.Tab]: "Таб",
  [SCREENS.AuthStack]: "Аунтификация",

  /*Страница настройки*/
  Russia: "Русский",
  English: "Английский",
  "change theme": "смена темы",
  "Exit the application": "Выход из приложения",
  "Language selection": "Выбор языка",
  dark: "Тёмная",
  light: "Светлая",
  "Changing the theme": "Смена темы",

  /*Страница входа*/
  "Sign in": "Войти",
  "Not a member?": "Не являетесь участником?",
  "Join now": "Присоединяйся сейчас",
  Email: "Электронная почта",
  Password: "Пароль",
  "Sign In": "Вход",
  "Forgot your password?": "Забыли пароль?",

  /*Страница регистрации*/
  Join: "Регистрация",
  "Already a member?": "Уже учавствуете?",
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

  /*Страница TAB*/
  Search: "Поиск",
  Statistics: "Статистика",
  Profile: "Профиль",

  /* Страница профиля*/
  Height: "Рост",
  Weight: "Вес",
  "Apply changes": "Применить изменения",

  /* Страница главная*/
  Base: "База",
  Breast: "Грудь",
  "Chest muscle development training": "Тренировка развития мышц груди",
  Begin: "Начать",
  Back: "Спина",
  "Back muscle development training": "Тренировка развития мышц спины",
  Hips: "Бёдра",
  "Thigh muscle development training": "Тренировка развития мышц бёдер",
} as const;
