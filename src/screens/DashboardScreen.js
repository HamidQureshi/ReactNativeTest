import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

export default class DashboardScreen extends Component {
    static navigationOptions = {
        title: 'Dashboard',
        headerStyle: {
            backgroundColor: "#73C6B6"
        }
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>DashboardScreen</Text>
            </View>
        );
    }
}  