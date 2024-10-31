import React from 'react';
import { StyleSheet, View, ActivityIndicator} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Logo, Text } from '../../components'

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <ActivityIndicator 
        size={60}
        color="#000"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF00',
    alignItems: 'center',
    justifyContent: 'center'
  },

});