import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';

export default class StyleTest extends Component {
  onPress(){
    console.log("You did it!")
  }

  render() {
    return (
      <View>
        <Text style={styles.small}>{this.props.row1}</Text>
        <View style={styles.container}>
        <TouchableHighlight style={styles.flatButton} underlayColor="red" onPress={this.onPress}>
          <View>
            <Text style={[styles.big, styles.blue]}>{this.props.row2}</Text>
          </View>
        </TouchableHighlight>
        </View>
        <Text style={[styles.red]}>{this.props.row3}</Text>
        <Text style={styles.blue}>{this.props.row4}</Text>
        <Text style={styles.bigblack}>{this.props.row5}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  big: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  small: {
    fontSize: 25
  },
  blue: {
    color: "blue",
  },
  container: {
    flexDirection: "row",
    height: 150
  },
  flatButton: {
    flex: 1,
    backgroundColor: 'yellow',
    padding: 20,
    elevation: 8
  }
});

StyleTest.propTypes = {
  row1: React.PropTypes.string.isRequired
};

AppRegistry.registerComponent('StyleTest', () => StyleTest);