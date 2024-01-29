import React from "react";
import { useTranslation } from "react-i18next";

import {
  TextInput,
  Button,
  Text,
  useTheme,
  StyleSheet,
  View,
  SafeAreaView,
} from "shared/ui";
import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";

const SignInScreen = () => {
  const [textEmail, setTextEmail] = React.useState("");
  const [textPassword, setTextPassword] = React.useState("");
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
        <Text variant="headlineSmall">{t("Sign in")}</Text>
        <View style={styles.row}>
          <Text>{t("Not a member?")}</Text>
          <Button onPress={() => navigate(SCREENS.SignUp)}>
            {t("Join now")}
          </Button>
        </View>
      </View>
      <View style={styles.input}>
        <TextInput
          label={t("Email or username")}
          value={textEmail}
          onChangeText={(text) => setTextEmail(text)}
        />
        <TextInput
          label={t("Password")}
          value={textPassword}
          onChangeText={(text) => setTextPassword(text)}
        />
      </View>
      <View style={styles.buttonSignIn}>
        <Button mode="contained" onPress={() => navigate(SCREENS.Tab)}>
          {t("Sign In")}
        </Button>
        <Button onPress={() => navigate(SCREENS.ForgotPassword)}>
          {t("Forgot your password?")}
        </Button>
      </View>
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "left",
  },
  input: {
    gap: 10,
  },
  buttonSignIn: {
    paddingBottom: 40,
  },
});

export default SignInScreen;
