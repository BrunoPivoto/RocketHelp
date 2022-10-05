import { NativeBaseProvider } from 'native-base';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';
import { THEME } from './src/styles/theme';
import { Loading } from './src/components/Loading';
import React from 'react';
import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  return (
    <NativeBaseProvider theme={THEME}>

      { fontsLoaded ? < Routes /> : < Loading />}
      
    </NativeBaseProvider>
  );
}


