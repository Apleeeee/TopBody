import React from "react";
import { useTranslation } from "react-i18next";

import { SafeAreaView, StyleSheet, Text, useTheme } from "shared/ui";

const ProfileStatisticsScreen = () => {
  const theme = useTheme();

  const { t } = useTranslation();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text variant="displayLarge" style={styles.title}>
        {t("Statistics")}
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

export default ProfileStatisticsScreen;
