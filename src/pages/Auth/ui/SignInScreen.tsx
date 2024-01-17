import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Button } from "shared/ui";

const SingInScreen = () => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        icon="camera"
        mode="outlined"
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>
      <Text></Text>
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

export default SingInScreen;
