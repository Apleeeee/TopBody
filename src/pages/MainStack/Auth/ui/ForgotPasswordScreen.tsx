import { zodResolver } from "@hookform/resolvers/zod";
import { TFunction } from "i18next";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { z } from "zod";

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
      .string({ required_error: t("This field is requaired!") })
      .email({ message: t("Invalid email address") }),
  });
};
const ForgotPasswordScreen = () => {
  const theme = useTheme();

  const { t } = useTranslation();

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(getSchema(t)),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
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
          <Text variant="headlineLarge">{t("Forgot your password?")}</Text>
          <Text variant="labelLarge">
            {t("Don’t worry, it happens to the best of us.")}
          </Text>
        </View>
        <View style={styles.buttonSendResetLink}>
          <Controller
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <View>
                <TextInput
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

          <Button mode="contained" onPress={onSubmit}>
            {t("Send reset link")}
          </Button>
        </View>
        <Button onPress={() => navigate(SCREENS.SignIn)}>
          {t("Back to sign in")}
        </Button>
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
  buttonSendResetLink: {
    gap: 10,
  },
});

export default ForgotPasswordScreen;
