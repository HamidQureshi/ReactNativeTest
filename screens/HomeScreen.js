import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import StyleComponent from '../style/StyleComponent'


export default class HomeScreen extends Component {

    state = {
        hide: Boolean,
        myState: String
    }

    constructor(props) {
        super(props);
        this.state = {
            hide: false,
            myState: 'This is a text component, created using state data. It will change or updated on clicking it.'
        };
    }

    updateState = () => {
        this.setState({
            hide: !this.state.hide,
            myState: 'The state is ' + this.state.hide
        })
    }

    static navigationOptions = {  
        title: 'Home',  
        headerStyle: {  
            backgroundColor: '#f4511e',  
        },  
        //headerTintColor: '#0ff',  
        headerTitleStyle: {  
            fontWeight: 'bold',  
        },  
    }; 

    render() {
        let imagePath = { uri: 'https://imagesvc.timeincapp.com/v3/fan/image?url=https://apptrigger.com/files/2018/11/Detective-Pikachu-screenshot.jpg&c=sc&w=850&h=560' };


        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Text onPress={this.updateState}> {this.state.myState} </Text>
                <Image source={imagePath} style={{ width: 500, height: 200 }} />
                <ChildClass name='name 1' />
                <ChildClass name='name 2' />
                <ChildClass name='Max' />
                <StyleComponent myState={this.state.myState} />

                <TextInput
                    value={this.state.myState}
                    onChangeText={myState => this.setState({ myState })}
                    placeholder={'Enter Any value'}
                    style={styles.textInput}
                />

                <Button
                    title="Go to Profile"
                    onPress={() => this.props.navigation.navigate('Profile', {
                        myState: this.state.myState,
                        otherParam: '101',
                    })}
                />
  <Button
                    title="Go to Tab Screen"
                    onPress={() => this.props.navigation.navigate('Tab')}
                />

            </View>
        );
    }
}

class ChildClass extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.welcome}>Hello {this.props.name}!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        height: 45, width: "95%", borderColor: "gray", borderWidth: 1, fontSize: 20,
    },
});
