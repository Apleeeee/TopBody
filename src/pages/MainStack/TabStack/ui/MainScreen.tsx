import React from "react";
import { useTranslation } from "react-i18next";

import { SafeAreaView, Searchbar, StyleSheet, useTheme } from "shared/ui";

const MainScreen = () => {
  const theme = useTheme();

  const { t } = useTranslation();

  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Searchbar
        placeholder={t("Search")}
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexStart: "center",
    justifyContent: "space-between",
    gap: 25,
  },
  title: {
    textAlign: "center",
  },
});

export default MainScreen;
