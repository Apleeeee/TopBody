import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

import { Button } from "shared/ui";
import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";

const SignInScreen = () => {
  const [textEmail, setTextEmail] = React.useState("");
  const [textPassword, setTextPassword] = React.useState("");
  return (
    <View style={styles.container}>
      <Text>TopBody</Text>
      <Text>Sign in</Text>
      <Text>Not a member?</Text>
      <Button onPress={() => navigate(SCREENS.SignUp)}>Join now</Button>
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
      <Button>SignIn</Button>
      <Button onPress={() => navigate(SCREENS.ForgotPassword)}>
        Forgot your password?
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignInScreen;
