import { t } from "i18next";
import React from "react";
import { useSelector } from "react-redux";

import { selectUser } from "entities/Authentication/model";
import { Avatar, Card, SafeAreaView, StyleSheet, useTheme } from "shared/ui";

const MyProfileScreen = () => {
  const theme = useTheme();

  const user = useSelector(selectUser);
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Card.Title
        title={t("Email")}
        subtitle={user?.email}
        left={(props) => <Avatar.Icon {...props} icon="email" />}
      />
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
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MyProfileScreen;
