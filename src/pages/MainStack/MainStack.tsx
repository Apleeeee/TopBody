import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import AuthStack from "./Auth/AuthenticationStack";
import TabStack from "./TabStack/TabStack";

import { selectUser } from "entities/Authentication/model";
import SettingsScreen from "pages/MainStack/Settings/ui/SettingsScreen";
import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";
import { RootStackParamList } from "shared/lib/types";
import { IconButton } from "shared/ui";

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  const { t } = useTranslation();

  const user = useSelector(selectUser);

  return (
    <Stack.Navigator
      screenOptions={({ route: { name } }) => ({
        title: t(name),
        headerRight: () => (
          <IconButton
            icon={"cog"}
            onPress={() => navigate(SCREENS.Settings)}
          ></IconButton>
        ),
      })}
    >
      {user === null ? (
        <Stack.Screen
          name={SCREENS.AuthStack}
          component={AuthStack}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <Stack.Screen
          name={SCREENS.Tab}
          component={TabStack}
          options={{ headerShown: false }}
        />
      )}
      <Stack.Screen name={SCREENS.Settings} component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
