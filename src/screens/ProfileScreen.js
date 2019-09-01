import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class ProfileScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('otherParam','default value'),
            headerStyle: {  
                backgroundColor: '#f4511e',  
            },  
            headerTintColor: '#0ff',  
            headerTitleStyle: {  
                fontWeight: 'bold',  
            }, 
        }
    } 

    render() {
        const { navigation } = this.props;
        const myState = navigation.getParam('myState', 'NO-value');
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Profile Screen</Text>
                <Text>{JSON.stringify(myState)}</Text>
                <Text>{myState}</Text>
                <Text>{navigation.getParam('otherParam', 'def val')}</Text>
                <Text>{this.props.navigation.state.params.otherParam}</Text>

                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
               
            </View>
        );
    }
}

