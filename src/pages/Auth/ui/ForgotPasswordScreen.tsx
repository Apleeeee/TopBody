import { StyleSheet, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button, Text } from "shared/ui";
import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";

const ForgotPasswordScreen = () => {
  const [textEmailForgot, setTextEmailForgot] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="displayLarge" style={styles.title}>
        TopBody
      </Text>
      <View style={styles.containerFull}>
        <Text variant="headlineSmall">Forgot your password?</Text>
        <Text variant="labelLarge">
          Don’t worry, it happens to the best of us.
        </Text>
        <TextInput
          label="Email or username"
          value={textEmailForgot}
          onChangeText={(text) => setTextEmailForgot(text)}
        />
        <Button mode="contained">Send reset link</Button>

        <Button onPress={() => navigate(SCREENS.SignIn)}>
          Back to sign in
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 150,
    flex: 1,
    padding: 15,
    backgroundColor: "#FFFBFF",
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
  },

  containerFull: {
    gap: 20,
    flex: 1,
    alignItems: "stretch",
  },
});

export default ForgotPasswordScreen;
