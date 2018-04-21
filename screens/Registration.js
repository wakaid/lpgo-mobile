import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  textField: {
    width: 150,
    height: 30,
    marginBottom: 10,
    textAlign: 'center',
    borderWidth: 1,
    flex: 1
  },
  button: {
    flex: 1
  }
});

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <View style={styles.container} >
        <TextInput style={styles.textField} defaultValue='email' onChangeText={ (text) => this.setState({ email: text }) }/>
        <TextInput style={styles.textField} defaultValue='name' onChangeText={ (text) => this.setState({ email: text }) }/>
        <TextInput style={styles.textField} defaultValue='address' onChangeText={ (text) => this.setState({ email: text }) }/>
        <TextInput style={styles.textField} defaultValue='phone number' onChangeText={ (text) => this.setState({ email: text }) }/>
        <TextInput style={styles.textField} defaultValue='password' secureTextEntry={true} onChangeText={ (text) => this.setState({ password: text }) }/>
        <Button style={styles.button} title="Sign Up" onPress={() => this.props.navigation.navigate('Login')} />
      </View>
    );
  }
}
