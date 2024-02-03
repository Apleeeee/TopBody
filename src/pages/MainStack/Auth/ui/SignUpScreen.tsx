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
  Checkbox,
  HelperText,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useTheme,
} from "shared/ui";
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
      <KeyboardAwareScrollView contentContainerStyle={styles.scroll}>
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
          <Controller
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <View>
                <TextInput
                  error={Boolean(error)}
                  label={t("ConfirmPassword")}
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry
                />
                <HelperText type="error" visible={Boolean(error)}>
                  {error?.message}
                </HelperText>
              </View>
            )}
            name="confirmPassword"
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
