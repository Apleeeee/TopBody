import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "./ui/SignInScreen";
import SignUpScreen from "./ui/SignUpScreen";
import ForgotPasswordScreen from "./ui/ForgotPasswordScreen";

import SCREENS from "shared/lib/screen";
import { RootStackParamList } from "shared/lib/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator>
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
