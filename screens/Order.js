import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, TextInput, Text, Button, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
  orderContainer: {
    flex: 1,
    margin: 10,
    flexDirection: 'row'
  },
  priceContainer: {
    flex: 1,
    margin: 10,
    flexDirection: 'column'
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  counterField: {
    height: 50,
    borderWidth: 1,
    flex: 1,
    textAlign: 'right',
    padding: 5
  },
  priceField: {
    fontSize: 20,
    textAlign: 'right'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

export default class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bright_counter: '0',
      commercial_counter: '0',
      elpiji_counter: '0',
      melon_counter: '0',
      musicool_counter: '0'
    };
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView style={styles.container} >
          <View style={styles.orderContainer}>
            <Image style={styles.image} source={require('../assets/bright.png')} />
            <View style={styles.priceContainer}>
              <TextInput keyboardType = 'numeric' style={styles.counterField} defaultValue={this.state.bright_counter} onChangeText={ (text) => this.setState({ bright_counter: text }) }/>
              <Text style={styles.priceField}>Rp 20,0000</Text>
            </View>
          </View>

          <View style={styles.orderContainer}>
            <Image style={styles.image} source={require('../assets/commercial.png')} />
            <View style={styles.priceContainer}>
              <TextInput keyboardType = 'numeric' style={styles.counterField} defaultValue={this.state.commercial_counter} onChangeText={ (text) => this.setState({ commercial_counter: text }) }/>
              <Text style={styles.priceField}>Rp 20,0000</Text>
            </View>
          </View>

          <View style={styles.orderContainer}>
            <Image style={styles.image} source={require('../assets/elpiji.png')} />
            <View style={styles.priceContainer}>
              <TextInput keyboardType = 'numeric' style={styles.counterField} defaultValue={this.state.elpiji_counter} onChangeText={ (text) => this.setState({ elpiji_counter: text }) }/>
              <Text style={styles.priceField}>Rp 20,0000</Text>
            </View>
          </View>

          <View style={styles.orderContainer}>
            <Image style={styles.image} source={require('../assets/melon.png')} />
            <View style={styles.priceContainer}>
              <TextInput keyboardType = 'numeric' style={styles.counterField} defaultValue={this.state.melon_counter} onChangeText={ (text) => this.setState({ melon_counter: text }) }/>
              <Text style={styles.priceField}>Rp 20,0000</Text>
            </View>
          </View>

          <View style={styles.orderContainer}>
            <Image style={styles.image} source={require('../assets/musicool.png')} />
            <View style={styles.priceContainer}>
              <TextInput keyboardType = 'numeric' style={styles.counterField} defaultValue={this.state.musicool_counter} onChangeText={ (text) => this.setState({ musicool_counter: text }) }/>
              <Text style={styles.priceField}>Rp 20,0000</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Button style={styles.button} title="Buy" onPress={() => this.props.navigation.navigate('Payment', this.state)} />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}
