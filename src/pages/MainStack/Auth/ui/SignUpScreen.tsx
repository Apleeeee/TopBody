import React from "react";
import { useTranslation } from "react-i18next";

import {
  Button,
  Text,
  useTheme,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Checkbox,
  SafeAreaView,
} from "shared/ui";
import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";

const SignUpScreen = () => {
  const [textEmailSingUp, setTextEmailSingUp] = React.useState("");
  const [textPasswordSingUp, setTextPasswordSingUp] = React.useState("");
  const [textConfirmPasswordSingUp, setTextConfirmPasswordSingUp] =
    React.useState("");
  const [checked, setChecked] = React.useState(false);
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
        <Text variant="headlineSmall">{t("Join")}</Text>
        <View style={styles.row}>
          <Text>{t("Already a member?")}</Text>
          <Button onPress={() => navigate(SCREENS.SignIn)}>
            {t("Sign In")}
          </Button>
        </View>
      </View>
      <View style={styles.input}>
        <TextInput
          label={t("Email")}
          value={textEmailSingUp}
          onChangeText={(text) => setTextEmailSingUp(text)}
        />
        <TextInput
          secureTextEntry={true}
          label={t("Password")}
          value={textPasswordSingUp}
          onChangeText={(text) => setTextPasswordSingUp(text)}
        />
        <TextInput
          secureTextEntry={true}
          label={t("ConfirmPassword")}
          value={textConfirmPasswordSingUp}
          onChangeText={(text) => setTextConfirmPasswordSingUp(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => {
          setChecked(!checked);
        }}
      >
        <Checkbox status={checked ? "checked" : "unchecked"} />
        <Text style={styles.textCheckbox}>
          {t(
            "Yes, I want emails with recommendations, special offers and more.",
          )}
        </Text>
      </TouchableOpacity>
      <Button mode="contained">{t("Join Now")}</Button>
      <Text style={styles.footerText}>
        {t(
          "By joining TopBody, you accept our Membership agreement, Privacy Policy and Terms of Use.",
        )}
      </Text>
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
    paddingBottom: 10,
    gap: 10,
  },
  touchableOpacity: {
    flexDirection: "row",
  },
  footerText: {
    textAlign: "center",
  },
  textCheckbox: {
    flex: 1,
  },
});

export default SignUpScreen;
