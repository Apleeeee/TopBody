import React from "react";
import { useTranslation } from "react-i18next";

import {
  TextInput,
  Button,
  Text,
  useTheme,
  SafeAreaView,
  StyleSheet,
  View,
} from "shared/ui";
import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";

const ForgotPasswordScreen = () => {
  const [textEmailForgot, setTextEmailForgot] = React.useState("");
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text variant="displayLarge" style={styles.title}>
        TopBody
      </Text>
      <View>
        <Text variant="headlineLarge">{t("Forgot your password?")}</Text>
        <Text variant="labelLarge">
          {t("Don’t worry, it happens to the best of us.")}
        </Text>
      </View>
      <View style={styles.buttonSendResetLink}>
        <TextInput
          label={t("Email or username")}
          value={textEmailForgot}
          onChangeText={(text) => setTextEmailForgot(text)}
        />
        <Button mode="contained">{t("Send reset link")}</Button>
      </View>
      <Button onPress={() => navigate(SCREENS.SignIn)}>
        {t("Back to sign in")}
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
  },
  buttonSendResetLink: {
    gap: 10,
  },
});

export default ForgotPasswordScreen;
