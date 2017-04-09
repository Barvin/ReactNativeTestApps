/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

import BlinkText from './components/BlinkText'
import StyleTest from './components/StyleTest'
import WriteSomething from './components/WriteSomething'

export default class AwesomeProject extends Component {
  constructor(props){
    super(props)
    this.state = {
      textData: "",
    }
  }
  
  render() {
    //console.log(WriteSomething.state.textData)
    return (
      <View style={[styles.inheritBackground, {backgroundColor: "white"}, {backgroundColor: this.state.textData}]}>
        <WriteSomething 
          textData={this.state.textData}
          onChangeText={
            (text) => this.setState({
              textData: text
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  standard: {
    fontSize: 20
  },
  inheritBackground:{
    flex:1,
    backgroundColor: "yellow"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);


