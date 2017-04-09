import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput
} from 'react-native';

export default class WriteSomething extends Component {
  render() {
    return (
      <View>
        <TextInput 
          {...this.props}

          placeholder="Enter Color"
          value={this.props.textData}
        />
        <View style={[{backgroundColor: this.props.textData}, styles.container]}>
          <Text style={styles.standard}>{this.props.textData}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  standard: {
    fontSize: 40,
    color: "black"
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})

AppRegistry.registerComponent('WriteSomething', () => WriteSomething)