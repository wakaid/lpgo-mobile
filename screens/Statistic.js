import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default class Statistic extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text style={{ fontSize: 50 }} >Statistic</Text>
      </View>
    );
  }
}
