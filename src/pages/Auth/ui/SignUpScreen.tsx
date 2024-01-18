import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput, Checkbox } from "react-native-paper";

import { Button } from "shared/ui";
import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";

const SignUpScreen = () => {
  const [textEmailSingUp, setTextEmailSingUp] = React.useState("");
  const [textPasswordSingUp, setTextPasswordSingUp] = React.useState("");
  const [textConfirmPasswordSingUp, setTextConfirmPasswordSingUp] =
    React.useState("");
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text>TopBody</Text>
      <Text>Join</Text>
      <Text>Already a member?</Text>
      <Button onPress={() => navigate(SCREENS.SignIn)}>SignIn</Button>
      <TextInput
        label="Email"
        value={textEmailSingUp}
        onChangeText={(text) => setTextEmailSingUp(text)}
      />
      <TextInput
        label="Password"
        value={textPasswordSingUp}
        onChangeText={(text) => setTextPasswordSingUp(text)}
      />
      <TextInput
        label="ConfirmPassword"
        value={textConfirmPasswordSingUp}
        onChangeText={(text) => setTextConfirmPasswordSingUp(text)}
      />
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Text>
        Yes, I want emails with recommendations, special offers and more.
      </Text>
      <Button mode="outlined">Join now</Button>
      <Text>
        By joining TopBody, you accept our Membership agreement, Privacy Policy
        and Terms of Use.
      </Text>
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

export default SignUpScreen;
