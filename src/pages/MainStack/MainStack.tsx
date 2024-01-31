import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";

import SignInScreen from "./Auth/ui/SignInScreen";
import SignUpScreen from "./Auth/ui/SignUpScreen";
import ForgotPasswordScreen from "./Auth/ui/ForgotPasswordScreen";
import TabStack from "./TabStack/TabStack";

import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";
import SettingsScreen from "pages/MainStack/Settings/ui/SettingsScreen";
import { IconButton } from "shared/ui";
import { RootStackParamList } from "shared/lib/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const getIsSignedIn = () => {
  // custom logic
  return true;
};

const MainStack = () => {
  const { t } = useTranslation();

  const isSignedIn = getIsSignedIn();

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
      {isSignedIn ? (
        <>
          <Stack.Screen name={SCREENS.SignIn} component={SignInScreen} />
          <Stack.Screen name={SCREENS.SignUp} component={SignUpScreen} />
          <Stack.Screen
            name={SCREENS.ForgotPassword}
            component={ForgotPasswordScreen}
          />
          <Stack.Screen name={SCREENS.Settings} component={SettingsScreen} />
        </>
      ) : (
        <>
          <Stack.Screen
            name={SCREENS.Tab}
            component={TabStack}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainStack;
