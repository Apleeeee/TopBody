import { zodResolver } from "@hookform/resolvers/zod";
import { TFunction } from "i18next";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";
import { z } from "zod";

import { updateUser } from "entities/Authentication/model";
import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";
import {
  Button,
  HelperText,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useTheme,
} from "shared/ui";

const getSchema = (t: TFunction) => {
  return z.object({
    email: z
      .string({ required_error: t("This field is required!") })
      .email({ message: t("Invalid email address") }),
    password: z
      .string({ required_error: t("This field is required!") })
      .min(8, { message: t("Must be n or more characters long", { n: 8 }) }),
  });
};

const SignInScreen = () => {
  const dispatch = useDispatch();

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
    dispatch(updateUser({ email: data.email, height: 180, weight: 75 }));
  });

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <KeyboardAwareScrollView contentContainerStyle={styles.scroll}>
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
                  keyboardType="email-address"
                  error={Boolean(error)}
                  label={t("Email")}
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
                  secureTextEntry
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
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  scroll: {
    justifyContent: "space-between",
    flex: 1,
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
