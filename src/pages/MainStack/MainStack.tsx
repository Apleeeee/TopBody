import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUpScreen from "pages/Auth/ui/SignUpScreen";
import ForgotPasswordScreen from "pages/Auth/ui/ForgotPasswordScreen";
import SignInScreen from "pages/Auth/ui/SignInScreen";
import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";
import SettingsScreen from "pages/Settings/ui/SettingsScreen";
import { IconButton } from "shared/ui";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <IconButton
            icon={"cog-outline"}
            onPress={() => navigate(SCREENS.Settings)}
          ></IconButton>
        ),
      }}
    >
      <Stack.Screen name={SCREENS.SignIn} component={SignInScreen} />
      <Stack.Screen name={SCREENS.SignUp} component={SignUpScreen} />
      <Stack.Screen
        name={SCREENS.ForgotPassword}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name={SCREENS.Settings} component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
