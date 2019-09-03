import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import {  TouchableOpacity, FlatList } from 'react-native';
import Dropzone from 'react-dropzone'
import Upload from '../component/upload/Upload'


export default class FileUploadScreen extends Component {
    static navigationOptions = {
        title: 'FileUpload',
    };

    onDrop = (acceptedFiles) => {
        console.log(acceptedFiles);
      }

    render() {

        return (
            <View >
              {/* <Dropzone onDrop={this.onDrop}>
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              Click me to upload a file!
            </div>
          )}
        </Dropzone> */}

{/* <div className="Card"> */}
          <Upload />
        {/* </div> */}
        
    
          </View>
        );
    }
}  

const styles = StyleSheet.create({

    // app: {
    //     text-align: center,
    //     background-color: rgb(206, 213, 223),
    //     min-height: 100vh,
    //     display: flex,
    //     flex-direction: column,
    //     align-items: center,
    //     justify-content: center,
    //     font-size: calc(10px + 2vmin),
    //   },
      
    //   card: {
    //     backgroundColor: white,
    //     padding: 32px,
    //     width: 50%,
    //     display: flex,
    //     align-items: flex-start;
    //     justify-content: flex-start;
    //     box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
    //       0 5px 15px 0 rgba(0, 0, 0, 0.08);
    //     box-sizing: border-box;
    //   }

    container: {
      flex: 1,
    },
    heading: {
      height: 60,
      backgroundColor: '#03A9F4',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headingTest: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
    },
    list: {
      margin: 5,
      backgroundColor: 'white',
      height:80,
      justifyContent: 'space-around',
      paddingLeft: 10,
      elevation: 1
    },
    fab: {
      position: 'absolute',
      width: 56,
      height: 56,
      alignItems: 'center',
      justifyContent: 'center',
      right: 20,
      bottom: 20,
      backgroundColor: '#03A9F4',
      borderRadius: 30,
      elevation: 8
    },
    fabIcon: {
      fontSize: 40,
      color: 'white'
    }
  });