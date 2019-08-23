import { createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import TabScreen from './screens/TabScreen'
import { Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';



const Stack1 = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: ProfileScreen,
  },
  {
    initialRouteName: "Home"
  }
);

const Stack2 = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Tab: TabScreen
  },
  {
    initialRouteName: "Tab"
  }
);

const TabNavigator = createMaterialBottomTabNavigator({
  // const TabNavigator = createMaterialTopTabNavigator({
  Tab1Header:
  {
    screen: Stack1,
    navigationOptions: {
      tabBarLabel: "Tab1",
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Ionicons name="ios-home" color={tintColor} size={25} />
        </View>
      ),
      activeColor: '#f60c0d',
      inactiveColor: '#f65a22',
      barStyle: { backgroundColor: '#f69b31' },
    }
  },
  Tab2Header:
  {
    screen: Stack2,
    navigationOptions: {
      tabBarLabel: "Tab2",
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Ionicons name="ios-person" color={tintColor} size={25} />
        </View>
      ),
      activeColor: '#615af6',
      inactiveColor: '#46f6d7',
      barStyle: { backgroundColor: '#67baf6' },
    }
  },
},
  //top nav bar settings
  // {
  //   tabBarOptions: {
  //     activeTintColor: 'white',
  //     showIcon: true,
  //     showLabel: false,
  //     style: {
  //       backgroundColor: 'red'
  //     }
  //   },
  // },
  {
    initialRouteName: "Tab2Header"
  });

export default createAppContainer(TabNavigator);






