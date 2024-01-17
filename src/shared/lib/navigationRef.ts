import { createNavigationContainerRef } from "@react-navigation/native";

import { RootStackParamList } from "./types";

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

// eslint-disable-next-line import/prefer-default-export
export function navigate<RouteName extends keyof RootStackParamList>(
  ...args: RouteName extends unknown
    ? undefined extends RootStackParamList[RouteName]
      ?
          | [screen: RouteName]
          | [screen: RouteName, params: RootStackParamList[RouteName]]
      : [screen: RouteName, params: RootStackParamList[RouteName]]
    : never
): void {
  if (navigationRef.isReady()) {
    navigationRef.navigate(...args);
  }
}
