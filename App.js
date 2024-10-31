import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

SplashScreen.preventAutoHideAsync();

import { useFonts, 
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold,
  SourceSansPro_700Bold,
  SourceSansPro_900Black
} from '@expo-google-fonts/source-sans-pro';

import { theme } from './src/styles'
import { Routes } from './src/routes'


export default function App () {
  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
    SourceSansPro_700Bold,
    SourceSansPro_900Black
  });
  if (!fontsLoaded) {
    SplashScreen.hideAsync();
  }
  return (
    <ThemeProvider theme={theme}>
      <Routes />     
    </ThemeProvider>
  )
};