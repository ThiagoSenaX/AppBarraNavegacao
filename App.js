import * as React from 'react';
//import { } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Constants from 'expo-constants';


import Rotas from './components/Rotas';

export default function App() {
  return (
    <NavigationContainer>
      <Rotas />
    </NavigationContainer>
  );
}


