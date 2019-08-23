import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import TabScreen from './screens/TabScreen'
import { Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';


const Stack1 = createStackNavigator(
  {
    Home: {screen :HomeScreen},
    Profile: ProfileScreen,
  },
  {
    initialRouteName: "Home"
  }
);

const Stack2 = createStackNavigator(
  {
    Home: {screen :HomeScreen},
    Tab: TabScreen 
  },
  {
    initialRouteName: "Tab"
  }
);

const TabNavigator = createBottomTabNavigator({  
  Tab1Header: 
  {screen :Stack1,
    navigationOptions:{
      tabBarLabel: "Tab1",
      tabBarIcon:({tintColor})=>(<Ionicons name="ios-home" color={tintColor} size={25}/>)
    }},  
  Tab2Header: 
  {screen :Stack2,
    navigationOptions:{
      tabBarLabel: "Tab2",
      tabBarIcon:({tintColor})=>(<Ionicons name="ios-person" color={tintColor} size={25}/>)
    }},  
},
  {
    initialRouteName: "Tab2Header"
  }); 

export default createAppContainer(TabNavigator);






