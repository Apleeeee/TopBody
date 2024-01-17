import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Button } from "shared/ui";

const SingUpScreen = () => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        icon="camera"
        mode="outlined"
        onPress={() => console.log("Pressed")}
      >
        Ba Dum Tss
      </Button>
      <Text>SingUp</Text>
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
  button: {
    paddingTop: 20,
  },
});

export default SingUpScreen;
