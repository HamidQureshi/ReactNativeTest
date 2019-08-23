import React, { Component } from 'react'  
import { Text, View, StyleSheet } from 'react-native'  
  
const StyleComponent = (props) => {  
    return (  
        <View>  
            <Text style = {styles.myState}>  
                {props.myState}  
            </Text>  
        </View>  
    )  
}  
export default StyleComponent  
  
const styles = StyleSheet.create ({  
    myState: {  
        marginTop: 20,  
        textAlign: 'center',  
        color: 'green',  
        fontWeight: 'bold',  
        fontSize: 20  
    }  
})  