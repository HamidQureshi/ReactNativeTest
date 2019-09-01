import { createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import TabScreen from './src/screens/TabScreen'
import WelcomeScreen from './src/screens/WelcomeScreen'
import DashboardScreen from './src/screens/DashboardScreen'
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignupScreen';
import { Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation';

const Stack1 = createStackNavigator(
  {
    Login: { screen:LoginScreen},
    Signup: {screen: SignUpScreen},
    Home: { screen: HomeScreen },
    Profile: {screen : ProfileScreen},
  },
  {
    initialRouteName: "Login"
  }
);

const Stack2 = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Tab: { screen:TabScreen}
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


const DashboardStackNavigator = createStackNavigator(
  {
    DashboardNavigator: { screen:DashboardScreen}
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Ionicons
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);

const WelcomeStackNavigator = createStackNavigator(
  {
    WelcomeNavigator: { screen:WelcomeScreen}
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Ionicons
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  },
  Welcome: {
    screen: WelcomeStackNavigator
  },
});

const AppSwitchNavigator = createSwitchNavigator({
  Dashboard: { screen: AppDrawerNavigator },
  Welcome: { screen: WelcomeScreen },

});


// export default createAppContainer(AppSwitchNavigator);
// export default createAppContainer(TabNavigator);
export default createAppContainer(Stack1);







