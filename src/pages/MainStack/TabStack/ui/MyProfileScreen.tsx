import { zodResolver } from "@hookform/resolvers/zod";
import { TFunction, t } from "i18next";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";

import { selectUser, updateUser } from "entities/Authentication/model";
import {
  Avatar,
  Button,
  Card,
  HelperText,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  useTheme,
} from "shared/ui";

const getSchema = (t: TFunction) => {
  return z.object({
    height: z
      .number({
        required_error: t("This field is required!"),
        invalid_type_error: t("This field must be number"),
      })
      .min(2, { message: t("Must be n or more characters long", { n: 2 }) })
      .positive({ message: t("This field must be positive") }),
    weight: z
      .number({
        required_error: t("This field is required!"),
        invalid_type_error: t("This field must be number"),
      })
      .min(2, { message: t("Must be n or more characters long", { n: 2 }) }),
  });
};

type ValidationSchema = z.infer<ReturnType<typeof getSchema>>;

const MyProfileScreen = () => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const { control, watch, handleSubmit } = useForm<ValidationSchema>({
    resolver: zodResolver(getSchema(t)),
    defaultValues: {
      height: user?.height,
      weight: user?.weight,
    },
  });
  const formValues = watch();
  console.log(formValues, "!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  const onSubmit = handleSubmit((data) => {
    dispatch(
      updateUser({
        email: user?.email ?? "",
        height: data.height,
        weight: data.weight,
      }),
    );
  });

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <KeyboardAwareScrollView>
        <View style={styles.profile}>
          <Card.Title
            title={t("Email")}
            subtitle={user?.email}
            left={(props) => <Avatar.Icon {...props} icon="email" />}
          />

          <Controller
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <View>
                <TextInput
                  keyboardType="decimal-pad"
                  error={Boolean(error)}
                  label={t("Height")}
                  value={value.toString()}
                  onChangeText={(text) => {
                    onChange(Number(text.replace(/\D/g, "")));
                  }}
                />
                <HelperText type="error" visible={Boolean(error)}>
                  {error?.message}
                </HelperText>
              </View>
            )}
            name="height"
          />
          <Controller
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <View>
                <TextInput
                  keyboardType="number-pad"
                  label={t("Weight")}
                  value={value.toString()}
                  onChangeText={(text) => {
                    onChange(Number(text.replace(/\D/g, "")));
                  }}
                />
                <HelperText type="error" visible={Boolean(error)}>
                  {error?.message}
                </HelperText>
              </View>
            )}
            name="weight"
          />
        </View>
      </KeyboardAwareScrollView>
      <Button mode="contained" onPress={onSubmit}>
        {t("Apply changes")}
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
  profile: {},
});

export default MyProfileScreen;
