import React from "react";

import { Text, useTheme, SafeAreaView, StyleSheet } from "shared/ui";

const MyProfileScreen = () => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text variant="displayLarge" style={styles.title}>
        TopBody1
      </Text>
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
});

export default MyProfileScreen;
