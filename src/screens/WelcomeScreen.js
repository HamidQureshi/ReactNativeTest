import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

export default class WelcomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>WelcomeScreen</Text>
                <Button
                    title="Go to DashboardScreen"
                    onPress={() => this.props.navigation.navigate('Dashboard')}
                />
            </View>
        );
    }
} 