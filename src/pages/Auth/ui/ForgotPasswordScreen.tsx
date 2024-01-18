import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

import { Button } from "shared/ui";
import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";

const ForgotPasswordScreen = () => {
  const [textEmailForgot, setTextEmailForgot] = React.useState("");
  return (
    <View style={styles.container}>
      <Text>TopBody</Text>
      <Text>Forgot your password?</Text>
      <Text>Don’t worry, it happens to the best of us.</Text>
      <TextInput
        label="Email or username"
        value={textEmailForgot}
        onChangeText={(text) => setTextEmailForgot(text)}
      />
      <Button mode="outlined">Send reset link</Button>
      <Button onPress={() => navigate(SCREENS.SignIn)}>Back to sign in</Button>
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

export default ForgotPasswordScreen;
