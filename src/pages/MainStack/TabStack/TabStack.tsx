import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTranslation } from "react-i18next";

import MainScreen from "./ui/MainScreen";
import MyProfileScreen from "./ui/MyProfileScreen";
import ProfileStatisticsScreen from "./ui/ProfileStatisticsScreen";

import { navigate } from "shared/lib/navigationRef";
import SCREENS from "shared/lib/screen";
import { RootStackParamList } from "shared/lib/types";
import { Icon, IconButton } from "shared/ui";

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabStack = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={({ route: { name } }) => ({
        title: t(name),
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (name === SCREENS.Main) {
            iconName = focused ? "home-circle" : "home-circle-outline";
          } else if (name === SCREENS.ProfileStatistics) {
            iconName = focused ? "equalizer" : "equalizer-outline";
          } else if (name === SCREENS.MyProfile) {
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
