import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  ILanguage,
  changeTheme,
  selectCurrentLanguage,
  selectCurrentTheme,
  setCurrentLanguage,
} from "entities/Settings/model";
import {
  useTheme,
  StyleSheet,
  SafeAreaView,
  Switch,
  Text,
  RadioButton,
  View,
} from "shared/ui";

const SettingsScreen = () => {
  const { t, i18n } = useTranslation();

  const currentLanguage = useSelector(selectCurrentLanguage);

  const dispatch = useDispatch();

  const theme = useTheme();

  const currentTheme = useSelector(selectCurrentTheme);

  const onToggleLanguage = (value: string) => {
    i18n.changeLanguage(value);
    dispatch(setCurrentLanguage(value as ILanguage));
  };
  const onToggleSwitch = () => {
    dispatch(changeTheme(currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <RadioButton.Group
        onValueChange={onToggleLanguage}
        value={currentLanguage}
      >
        <View>
          <Text>{t("Russia")}</Text>
          <RadioButton.Android value="ru" />
        </View>
        <View>
          <Text>{t("English")}</Text>
          <RadioButton.Android value="en" />
        </View>
      </RadioButton.Group>
      <Switch value={currentTheme === "dark"} onValueChange={onToggleSwitch} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "space-between",
  },
});
export default SettingsScreen;
