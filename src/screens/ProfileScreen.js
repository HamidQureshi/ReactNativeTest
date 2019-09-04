import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class ProfileScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Profile',
            drawerLabel: 'Notifications',
            // drawerIcon: ({ tintColor }) => (
            //     <Image
            //         source={require('../../res/icon_home.png')}
            //         style={[styles.icon, { tintColor: tintColor }]}
            //     />
            // ),
            headerStyle: {
                backgroundColor: '#73C6B6',
            },
            // headerTintColor: '#0ff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }



    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Profile Screen</Text>

            </View>
        );
    }
}

