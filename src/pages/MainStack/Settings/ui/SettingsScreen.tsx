import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { updateUser } from "entities/Authentication/model";
import {
  ILanguage,
  changeTheme,
  selectCurrentLanguage,
  selectCurrentTheme,
  setCurrentLanguage,
} from "entities/Settings/model";
import { pop } from "shared/lib/navigationRef";
import {
  Button,
  RadioButton,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  View,
  useTheme,
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
  const onPress = () => {
    dispatch(updateUser(null));
    pop();
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.fullBody}>
        <View style={styles.nameHeader}>
          <Text variant="headlineMedium">{t("Changing the theme")}</Text>
          <View style={styles.button}>
            <Switch
              value={currentTheme === "dark"}
              onValueChange={onToggleSwitch}
            />
            <Text variant="headlineSmall">{t(currentTheme)}</Text>
          </View>
        </View>
        <Text variant="headlineMedium">{t("Language selection")}</Text>
        <RadioButton.Group
          onValueChange={onToggleLanguage}
          value={currentLanguage}
        >
          <Text>{t("Russia")}</Text>
          <RadioButton.Item label="Russian" value="ru" />
          <Text>{t("English")}</Text>
          <RadioButton.Item label="English" value="en" />
        </RadioButton.Group>
      </View>
      <Button mode="contained" onPress={onPress}>
        {t("Exit the application")}
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  nameHeader: {
    gap: 15,
  },
  button: {
    flexDirection: "row",
    gap: 15,
  },
  fullBody: {
    gap: 15,
  },
});
export default SettingsScreen;
