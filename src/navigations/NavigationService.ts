import React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';

type RootStackParamList = {
  [key: string]: any; // Define your specific route parameters here if known
};

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

export function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}
