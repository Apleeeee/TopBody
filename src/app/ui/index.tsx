import React from "react";
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  adaptNavigationTheme,
} from "react-native-paper";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider, useSelector } from "react-redux";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme as DefaultDarkTheme,
} from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";

import MainStack from "pages/MainStack/MainStack";
import { persistor, store } from "app/model";
import { selectCurrentTheme } from "entities/Settings/model";
import { navigationRef } from "shared/lib/navigationRef";
const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: DefaultTheme,
  reactNavigationDark: DefaultDarkTheme,
});
const Wrapper = () => {
  const currentTheme = useSelector(selectCurrentTheme);

  const { theme } = useMaterial3Theme();

  const paperTheme =
    currentTheme === "dark"
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };
  return (
    <SafeAreaProvider>
      <PaperProvider theme={paperTheme}>
        <NavigationContainer
          ref={navigationRef}
          theme={currentTheme === "light" ? LightTheme : DarkTheme}
        >
          <MainStack />
        </NavigationContainer>
        <StatusBar style={currentTheme === "dark" ? "light" : "dark"} />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
        onBeforeLift={() => {
          require("../lib/i18n");
        }}
      >
        <Wrapper />
      </PersistGate>
    </Provider>
  );
}
