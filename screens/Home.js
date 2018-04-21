import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container} >
      </View>
    );
  }
}
