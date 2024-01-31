import React from "react";
import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TFunction } from "i18next";

import {
  TextInput,
  Button,
  Text,
  useTheme,
  StyleSheet,
  View,
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
  });
};

const SignInScreen = () => {
  const theme = useTheme();

  const { t } = useTranslation();

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(getSchema(t)),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    navigate(SCREENS.Tab);
  });
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
        <Controller
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View>
              <TextInput
                error={Boolean(error)}
                label={t("Email or username")}
                value={value}
                onChangeText={onChange}
              />
              <HelperText type="error" visible={Boolean(error)}>
                {error?.message}
              </HelperText>
            </View>
          )}
          name="email"
        />
        <Controller
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View>
              <TextInput
                error={Boolean(error)}
                label={t("Password")}
                value={value}
                onChangeText={onChange}
              />
              <HelperText type="error" visible={Boolean(error)}>
                {error?.message}
              </HelperText>
            </View>
          )}
          name="password"
        />
      </View>
      <View style={styles.buttonSignIn}>
        <Button mode="contained" onPress={onSubmit}>
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
