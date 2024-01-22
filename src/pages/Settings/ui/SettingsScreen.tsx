import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeTheme, selectCurrentTheme } from "entities/Settings/model";
import { useTheme, StyleSheet, SafeAreaView, Switch } from "shared/ui";

const SettingsScreen = () => {
  const dispatch = useDispatch();

  const theme = useTheme();

  const currentTheme = useSelector(selectCurrentTheme);

  const onToggleSwitch = () => {
    dispatch(changeTheme(currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Switch value={currentTheme === "dark"} onValueChange={onToggleSwitch} />
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
export default SettingsScreen;
