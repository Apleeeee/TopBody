import React from "react";

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
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text variant="displayLarge" style={styles.title}>
        TopBody
      </Text>
      <View>
        <Text variant="headlineSmall">Sign in</Text>
        <View style={styles.row}>
          <Text>Not a member?</Text>
          <Button onPress={() => navigate(SCREENS.SignUp)}>Join now</Button>
        </View>
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
      <View style={styles.buttonSignIn}>
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
