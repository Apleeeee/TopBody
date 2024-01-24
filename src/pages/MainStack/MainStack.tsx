import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";

import SignUpScreen from "pages/Auth/ui/SignUpScreen";
import ForgotPasswordScreen from "pages/Auth/ui/ForgotPasswordScreen";
import SignInScreen from "pages/Auth/ui/SignInScreen";
import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";
import SettingsScreen from "pages/Settings/ui/SettingsScreen";
import { IconButton } from "shared/ui";
import { RootStackParamList } from "shared/lib/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      screenOptions={({ route: { name } }) => ({
        title: t(name),
        headerRight: () => (
          <IconButton
            icon={"cog-outline"}
            onPress={() => navigate(SCREENS.Settings)}
          ></IconButton>
        ),
      })}
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
