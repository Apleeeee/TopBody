import React from "react";
import { useTranslation } from "react-i18next";

import {
  useTheme,
  StyleSheet,
  SafeAreaView,
  Text,
  Searchbar,
  View,
} from "shared/ui";

const MainScreen = () => {
  const theme = useTheme();

  const { t } = useTranslation();

  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View>
        <Text variant="displayLarge" style={styles.title}>
          {t("Home")}
        </Text>
      </View>
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
    flexStart: "center",
    justifyContent: "space-between",
    gap: 25,
    paddingHorizontal: 15,
  },
  title: {
    textAlign: "center",
  },
});

export default MainScreen;
