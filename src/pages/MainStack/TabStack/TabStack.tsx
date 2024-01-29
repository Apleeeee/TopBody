import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainScreen from "./ui/MainScreen";
import MyProfileScreen from "./ui/MyProfile";
import ProfileStatisticsScreen from "./ui/ProfileStatistics";

import SCREENS from "shared/lib/screen";

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={SCREENS.Main} component={MainScreen} />
      <Tab.Screen
        name={SCREENS.ProfileStatistics}
        component={ProfileStatisticsScreen}
      />
      <Tab.Screen name={SCREENS.MyProfile} component={MyProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabStack;
