import React from "react";

import {
  TextInput,
  Button,
  Text,
  useTheme,
  SafeAreaView,
  StyleSheet,
  View,
} from "shared/ui";
import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";

const ForgotPasswordScreen = () => {
  const [textEmailForgot, setTextEmailForgot] = React.useState("");
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text variant="displayLarge" style={styles.title}>
        TopBody
      </Text>
      <View>
        <Text variant="headlineLarge">Forgot your password?</Text>
        <Text variant="labelLarge">
          Don’t worry, it happens to the best of us.
        </Text>
      </View>
      <View style={styles.buttonSendResetLink}>
        <TextInput
          label="Email or username"
          value={textEmailForgot}
          onChangeText={(text) => setTextEmailForgot(text)}
        />
        <Button mode="contained">Send reset link</Button>
      </View>
      <Button onPress={() => navigate(SCREENS.SignIn)}>Back to sign in</Button>
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
  buttonSendResetLink: {
    gap: 10,
  },
});

export default ForgotPasswordScreen;
