import React from 'react';
import { Home } from './src/screens';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components';

SplashScreen.preventAutoHideAsync();

import { SourceSansPro_400Regular,
  SourceSansPro_600SemiBold,
  SourceSansPro_700Bold,
  SourceSansPro_900Black, useFonts } from '@expo-google-fonts/source-sans-pro';

import { theme } from './src/styles'


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
      <Home />
    </ThemeProvider>
  )
};