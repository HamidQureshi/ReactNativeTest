import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import SwipeableList from '../component/swipeableList/SwipeableList';
import SwipeableListItem from '../component/swipeableList/SwipeableListItem';


export default class FileUploadScreen extends Component {
    static navigationOptions = {
        title: 'FileUpload',
        headerStyle: {
            backgroundColor: "#73C6B6"
        },
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>FileUpload</Text>

                <SwipeableList >
                    <SwipeableListItem>This is test bbbbbbbbbbbbbbbbbbbbbbbbbbbbb 1</SwipeableListItem>
                    <SwipeableListItem>This is test 2</SwipeableListItem>
                    <SwipeableListItem>This is test 3</SwipeableListItem>
                </SwipeableList>

            </View>
        );
    }
}  