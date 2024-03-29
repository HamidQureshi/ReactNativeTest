import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard, Image } from 'react-native';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    // let login_url ='https://api.keybox.co/api/login'


    login() {

        return fetch('https://api.keybox.co/api/login', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
                // accept: 'application/json',
                // 'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'username': 'hamid',
                'password': 'A12345678!',
            }),
        })
            // .then((response) => response.json())
            .then((response) => {
                AsyncStorage.setItem('Token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRmZTQ4NGQyLTQxZDAtNDFmNy1hMWMxLTJiZTJmZjhmOTk0MSIsInRpbWVzdGFtcCI6MTU2NzQxOTQ2MTU1MiwiaWF0IjoxNTY3NDE5NDYxLCJleHAiOjE1Njc0NDgyNjF9.2V1QC9qNNRWINsrsjFhksAdai7hmQgNBZlSpLNvEWsA');
                return response
            })
            .catch((error) => {
                console.error(error);
            });

    }

    saveData = async (navigation) => {
        // saveData() {
        const { email, password } = this.state;

        //save data with asyncstorage
        let loginDetails = {
            email: email,
            password: password
        }

        if (this.props.type !== 'Login') {
            console.log('----' + 'signup clicked');

            AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));

            Keyboard.dismiss();
            alert("You successfully registered. Email: " + email + ' password: ' + password);
            this.login();
        }
        else if (this.props.type == 'Login') {

            console.log(await this.login());

            let token = await AsyncStorage.getItem('Token')
            console.log(token);
            // alert('token ' + token);

            //move to dashboard now
            navigation.navigate('Dashboard');


            // try{
            // let loginDetails = await AsyncStorage.getItem('loginDetails');
            //     let ld = JSON.parse(loginDetails);

            //     if (ld.email != null && ld.password != null)
            //     {
            //         if (ld.email == email && ld.password == password)
            //         {
            //             alert('Go in!');
            //         }
            //         else
            //         {
            //             alert('Email and Password does not exist!');
            //         }
            //     }

            // }catch(error)
            // {
            //     alert(error);
            // }
        }
    }

    showData = async () => {
        let loginDetails = await AsyncStorage.getItem('loginDetails');
        let ld = JSON.parse(loginDetails);
        alert('email: ' + ld.email + ' ' + 'password: ' + ld.password);
    }

    render() {
        let imagePath = { uri: 'https://api.keybox.co/assets/imgs/logo-white.png' };
        return (
            <View style={styles.container}>
                <Image source={imagePath} style={{ width: 1000, height: 200 }} />
                <TextInput style={styles.inputBox}
                    onChangeText={(email) => this.setState({ email })}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    placeholderTextColor="#002f6c"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onSubmitEditing={() => this.password.focus()} />

                <TextInput style={styles.inputBox}
                    onChangeText={(password) => this.setState({ password })}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#002f6c"
                    ref={(input) => this.password = input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => this.saveData(this.props.navigation)}>{this.props.type}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Dashboard')}>teswt </Text>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: 300,
        backgroundColor: '#eeeeee',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});