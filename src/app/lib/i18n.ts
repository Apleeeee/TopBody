import i18n, { LanguageDetectorModule } from "i18next";
import { initReactI18next } from "react-i18next";
import { NativeModules, Platform } from "react-native";

import commonEn from "./translations/en/common";
import commonRu from "./translations/ru/common";

import { store } from "app/model";
import {
  ILanguage,
  selectCurrentLanguage,
  setCurrentLanguage,
} from "entities/Settings/model";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
export const defaultNS = "common";
export const resources = {
  en: {
    [defaultNS]: commonEn,
  },
  ru: {
    [defaultNS]: commonRu,
  },
};

const RNLanguageDetector: LanguageDetectorModule = {
  type: "languageDetector",
  init: () => {
    //
  },
  detect: () => {
    const currentLanguage = selectCurrentLanguage(store.getState());
    /* istanbul ignore next */
    const locale = currentLanguage
      ? currentLanguage
      : Platform.OS === "ios"
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
        : NativeModules.I18nManager.localeIdentifier;

    return locale.split("_")[0];
  },
  cacheUserLanguage: (lng: ILanguage) => {
    store.dispatch(setCurrentLanguage(lng));
  },
};

i18n
  .use(RNLanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3",
    fallbackLng: "ru",
    debug: __DEV__ && !process.env.JEST_WORKER_ID,
    defaultNS: defaultNS,
    resources,
  });

export default i18n;
