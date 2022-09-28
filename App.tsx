import { NativeBaseProvider } from 'native-base';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';
import { THEME } from './src/styles/theme';
import { Loading } from './src/components/Loadings';
import React from 'react';
import { Home } from './src/screens/Home';

export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  return (
    <NativeBaseProvider theme={THEME}>

      { fontsLoaded ? < Home /> : < Loading />}
      
    </NativeBaseProvider>
  );
}


