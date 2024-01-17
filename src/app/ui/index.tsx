import { StatusBar } from "expo-status-bar";
import React from "react";

import { PaperProvider } from "shared/ui";
import SingInScreen from "pages/Auth/ui/SignInScreen";

export default function App() {
  return (
    <PaperProvider>
      <SingInScreen></SingInScreen>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
