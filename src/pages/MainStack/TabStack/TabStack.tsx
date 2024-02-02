import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainScreen from "./ui/MainScreen";
import MyProfileScreen from "./ui/MyProfile";
import ProfileStatisticsScreen from "./ui/ProfileStatistics";

import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";
import { Icon, IconButton } from "shared/ui";

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
      <Tab.Screen
        name={SCREENS.MyProfile}
        component={MyProfileScreen}
        options={{
          headerRight: () => (
            <IconButton
              icon={"cog"}
              onPress={() => navigate(SCREENS.Settings)}
            ></IconButton>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
