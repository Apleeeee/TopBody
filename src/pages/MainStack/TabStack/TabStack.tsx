import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Icon } from "react-native-paper";

import SettingsScreen from "../Settings/ui/SettingsScreen";

import MainScreen from "./ui/MainScreen";
import MyProfileScreen from "./ui/MyProfile";
import ProfileStatisticsScreen from "./ui/ProfileStatistics";

import SCREENS from "shared/lib/screen";

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === SCREENS.Main) {
            iconName = focused ? "home-circle" : "home-circle-outline";
          } else if (route.name === SCREENS.ProfileStatistics) {
            iconName = focused ? "equalizer" : "equalizer-outline";
          } else if (route.name === SCREENS.MyProfile) {
            iconName = focused ? "account-box" : "account-box-outline";
          } else if (route.name === SCREENS.Settings) {
            iconName = focused ? "cog" : "cog-outline";
          }
          return <Icon source={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={SCREENS.Main} component={MainScreen} />
      <Tab.Screen
        name={SCREENS.ProfileStatistics}
        component={ProfileStatisticsScreen}
      />
      <Tab.Screen name={SCREENS.MyProfile} component={MyProfileScreen} />
      <Tab.Screen name={SCREENS.Settings} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabStack;
