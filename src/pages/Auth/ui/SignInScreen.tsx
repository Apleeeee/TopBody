import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Button } from "shared/ui";
import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";

const SingInScreen = () => {
  return (
    <View style={styles.container}>
      <Button
        icon="camera"
        mode="outlined"
        onPress={() => navigate(SCREENS.SingUp)}
      >
        SingUp
      </Button>
      <Button
        icon="camera"
        mode="outlined"
        onPress={() => navigate(SCREENS.ForgotPassword)}
      >
        ForgotPassword
      </Button>
      <Text>SingIp</Text>
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

export default SingInScreen;
