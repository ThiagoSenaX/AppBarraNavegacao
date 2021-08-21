import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';

import Mundo from './Mundo';
import Esportes from './Esportes';
import Carros from './Carros';
import Economia from './Economia';

const Tab = createBottomTabNavigator();
export default function Rotas(){
  return(
    <Tab.Navigator
    initialRouteName="Mundo"
    tabBarOptions = {{activeTinColor:'#FFFFFF'}}
    >
      <Tab.Screen 
      name="Mundo"
      component={Mundo}
      options={{
        tabBarLabel:"Mundo",
        title:"Notícias no Mundo",
        tabBarIcon:({color,size}) => (
          <MaterialCommunityIcons name="web" color='black' size={size} />
        ),
      }}      
      />

      <Tab.Screen 
      name="Esportes"
      component={Esportes}
      options={{
        tabBarLabel:"Esportes",
        title:"Notícias de Esportes",
        tabBarIcon:({color,size}) => (
          <MaterialCommunityIcons name="basketball" size={size} color='black' />
        ),
      }}      
      />

      <Tab.Screen 
      name="Carros"
      component={Carros}
      options={{
        tabBarLabel:"Carros",
        title:"Notícias de Carros",
        tabBarIcon:({color,size}) => (
          <MaterialCommunityIcons name="car-sports" color='black' size={size} />
        ),
      }}      
      />

      <Tab.Screen 
      name="Economia"
      component={Economia}
      options={{
        tabBarLabel:"Economia",
        title:"Notícias da Economia",
        tabBarIcon:({color,size}) => (
          <MaterialCommunityIcons name="cash-usd" color='black' size={size} />
        ),
      }}      
      />
    </Tab.Navigator>
  );
}

