import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";

import TabStack from "./TabStack/TabStack";
import AuthStack from "./Auth/AuthenticationStack";
import SplashScreen from "./SplashScreen/lib/ui/SplashScreen";

import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";
import SettingsScreen from "pages/MainStack/Settings/ui/SettingsScreen";
import { IconButton } from "shared/ui";
import { RootStackParamList } from "shared/lib/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  const { t } = useTranslation();
  if (state.isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }
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
      {state.userToken == null ? (
        <Stack.Screen
          name={SCREENS.AuthStack}
          component={AuthStack}
          options={{
            headerShown: false,
            animationTypeForReplace: state.isSignout ? "pop" : "push",
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
