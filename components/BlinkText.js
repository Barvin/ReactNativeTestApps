import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 800);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={styles.p}>{display}</Text>
    );
  }
}

export default class BlinkText extends Component {
  render() {
    return (
      <View>
        <Blink text={this.props.text} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
	p : {
		color: 'blue'
	}
})

Blink.propTypes = {
  display: React.PropTypes.string.isRequired
};

AppRegistry.registerComponent('BlinkText', () => BlinkText);

