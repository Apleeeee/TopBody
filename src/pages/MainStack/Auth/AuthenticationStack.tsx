import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";

import ForgotPasswordScreen from "./ui/ForgotPasswordScreen";
import SignInScreen from "./ui/SignInScreen";
import SignUpScreen from "./ui/SignUpScreen";

import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";
import { RootStackParamList } from "shared/lib/types";
import { IconButton } from "shared/ui";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
  const { t } = useTranslation();

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
      <Stack.Screen name={SCREENS.SignIn} component={SignInScreen} />
      <Stack.Screen name={SCREENS.SignUp} component={SignUpScreen} />
      <Stack.Screen
        name={SCREENS.ForgotPassword}
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
