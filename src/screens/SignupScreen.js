import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Form from '../component/Form'

export default class Signup extends Component {

    goBack() {
        this.props.navigation.navigate('Login')

    }

    render() {
        return(
            <View style={styles.container}>
                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>
                <Form type="Signup"/>
                <View style={styles.signupTextCont}> 
                    <Text style={styles.signupText}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.signupButton}>Login</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    signupTextCont: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingVertical: 16,
      flexDirection: 'row'
    },
    signupText: {
      color: '#12799f', 
      fontSize:16
    },
    signupButton: {
        color: '#12799f',
        fontSize:16,
        fontWeight: '500'
    }
});