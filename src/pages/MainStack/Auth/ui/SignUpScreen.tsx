import React from "react";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { TFunction } from "i18next";
import { zodResolver } from "@hookform/resolvers/zod";

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
  HelperText,
} from "shared/ui";
import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";
const getSchema = (t: TFunction) => {
  return z.object({
    email: z
      .string({ required_error: t("This field is requaired!") })
      .email({ message: t("Invalid email address") }),
    password: z
      .string({ required_error: t("This field is requaired!") })
      .min(8, { message: t("Must be n or more characters long", { n: 8 }) }),
    confirmPassword: z
      .string({ required_error: t("This field is requaired!") })
      .min(8, { message: t("Must be n or more characters long", { n: 8 }) }),
  });
};
const SignUpScreen = () => {
  const [checked, setChecked] = React.useState(false);
  const theme = useTheme();
  const { t } = useTranslation();
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(getSchema(t)),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
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
          label={t("Password")}
          value={textPasswordSingUp}
          onChangeText={(text) => setTextPasswordSingUp(text)}
        />
        <TextInput
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
      <Button mode="contained" onPress={onSubmit}>
        {t("Join Now")}
      </Button>
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
