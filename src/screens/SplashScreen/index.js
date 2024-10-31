import React, {useEffect} from 'react';
import { StyleSheet, View, ActivityIndicator} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Logo, Text, Container } from '../../components'

export const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 1000)
  }, [navigation])

  return (
    <Container align="center" justify="center">
      <Logo />
      <ActivityIndicator 
        size={60}
        color="#000"
      />
      <Text>Bem Vindo</Text>
      <StatusBar style="auto" />
    </Container>
  );
}