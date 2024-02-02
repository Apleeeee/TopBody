import {
  createNavigationContainerRef,
  StackActions,
} from "@react-navigation/native";

import { RootStackParamList } from "./types";

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const move =
  <RouteName extends keyof RootStackParamList>(
    ...args: // this first condition allows us to iterate over a union type
    // This is to avoid getting a union of all the params from `ParamList[RouteName]`,
    // which will get our types all mixed up if a union RouteName is passed in.
    RouteName extends unknown
      ? // This condition checks if the params are optional,
        // which means it's either undefined or a union with undefined
        undefined extends RootStackParamList[RouteName]
        ?
            | [screen: RouteName] // if the params are optional, we don't have to provide it
            | [screen: RouteName, params: RootStackParamList[RouteName]]
        : [screen: RouteName, params: RootStackParamList[RouteName]]
      : never
  ) =>
  () => {
    push(...args);
  };

export function navigate<RouteName extends keyof RootStackParamList>(
  ...args: // this first condition allows us to iterate over a union type
  // This is to avoid getting a union of all the params from `ParamList[RouteName]`,
  // which will get our types all mixed up if a union RouteName is passed in.
  RouteName extends unknown
    ? // This condition checks if the params are optional,
      // which means it's either undefined or a union with undefined
      undefined extends RootStackParamList[RouteName]
      ?
          | [screen: RouteName] // if the params are optional, we don't have to provide it
          | [screen: RouteName, params: RootStackParamList[RouteName]]
      : [screen: RouteName, params: RootStackParamList[RouteName]]
    : never
): void {
  if (navigationRef.isReady() && navigationRef.current) {
    navigationRef.current.navigate(...args);
  }
}

export function push<RouteName extends keyof RootStackParamList>(
  ...args: // this first condition allows us to iterate over a union type
  // This is to avoid getting a union of all the params from `ParamList[RouteName]`,
  // which will get our types all mixed up if a union RouteName is passed in.
  RouteName extends unknown
    ? // This condition checks if the params are optional,
      // which means it's either undefined or a union with undefined
      undefined extends RootStackParamList[RouteName]
      ?
          | [screen: RouteName] // if the params are optional, we don't have to provide it
          | [screen: RouteName, params: RootStackParamList[RouteName]]
      : [screen: RouteName, params: RootStackParamList[RouteName]]
    : never
): void {
  if (navigationRef.isReady() && navigationRef.current) {
    // It's okay to pass args like that for better func usage
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    navigationRef.current.dispatch(StackActions.push(...args));
  }
}

export function pop(count?: number): void {
  if (navigationRef.isReady() && navigationRef.current) {
    navigationRef.current.dispatch(StackActions.pop(count));
  }
}

export function popToTop(): void {
  if (navigationRef.isReady() && navigationRef.current) {
    navigationRef.current.dispatch(StackActions.popToTop());
  }
}

export function replace<RouteName extends keyof RootStackParamList>(
  ...args: // this first condition allows us to iterate over a union type
  // This is to avoid getting a union of all the params from `ParamList[RouteName]`,
  // which will get our types all mixed up if a union RouteName is passed in.
  RouteName extends unknown
    ? // This condition checks if the params are optional,
      // which means it's either undefined or a union with undefined
      undefined extends RootStackParamList[RouteName]
      ?
          | [screen: RouteName] // if the params are optional, we don't have to provide it
          | [screen: RouteName, params: RootStackParamList[RouteName]]
      : [screen: RouteName, params: RootStackParamList[RouteName]]
    : never
): void {
  if (navigationRef.isReady() && navigationRef.current) {
    // It's okay to pass args like that for better func usage
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    navigationRef.current.dispatch(StackActions.replace(...args));
  }
}

export function goBack(): void {
  if (navigationRef.isReady() && navigationRef.current) {
    navigationRef.current.goBack();
  }
}
