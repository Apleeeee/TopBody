import { StyleSheet, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button, Text } from "shared/ui";
import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";

const SignInScreen = () => {
  const [textEmail, setTextEmail] = React.useState("");
  const [textPassword, setTextPassword] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="displayLarge" style={styles.title}>
        TopBody
      </Text>
      <Text variant="headlineSmall">Sign in</Text>
      <View style={styles.row}>
        <Text>Not a member?</Text>
        <Button onPress={() => navigate(SCREENS.SignUp)}>Join now</Button>
      </View>
      <View style={styles.input}>
        <TextInput
          label="Email or username"
          value={textEmail}
          onChangeText={(text) => setTextEmail(text)}
        />
        <TextInput
          label="Password"
          value={textPassword}
          onChangeText={(text) => setTextPassword(text)}
        />
      </View>
      <View style={styles.buttonAndText}>
        <Button mode="contained">Sign In</Button>
        <Button onPress={() => navigate(SCREENS.ForgotPassword)}>
          Forgot your password?
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#FFFBFF",
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
    gap: 20,
  },
  buttonAndText: {},
});

export default SignInScreen;
