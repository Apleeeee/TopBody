import React from "react";
import { useTranslation } from "react-i18next";

import { useTheme, SafeAreaView, StyleSheet, Text } from "shared/ui";

const SplashScreen = () => {
  const theme = useTheme();

  const { t } = useTranslation();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text variant="displayLarge">{t("Loading")}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "space-between",
  },
});

export default SplashScreen;
