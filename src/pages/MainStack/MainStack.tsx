import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ForgotPasswordScreen from "pages/Auth/ui/ForgotPasswordScreen";
import SingInScreen from "pages/Auth/ui/SignInScreen";
import SingUpScreen from "pages/Auth/ui/SingUpScreen";
import { navigationRef } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer
      onReady={() => {
        console.log("ready");
      }}
      ref={navigationRef}
    >
      <Stack.Navigator>
        <Stack.Screen name={SCREENS.SingIn} component={SingInScreen} />
        <Stack.Screen name={SCREENS.SingUp} component={SingUpScreen} />
        <Stack.Screen
          name={SCREENS.ForgotPassword}
          component={ForgotPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
