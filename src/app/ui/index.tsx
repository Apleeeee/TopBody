import { StatusBar } from "expo-status-bar";
import React from "react";

import { PaperProvider } from "shared/ui";
import MainStack from "pages/MainStack/MainStack";

export default function App() {
  return (
    <PaperProvider>
      <MainStack />
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
