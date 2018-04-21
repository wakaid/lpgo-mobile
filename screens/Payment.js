import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Toast from 'react-native-root-toast';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  detailContainer: {
    flex: 1,
    margin: 10,
    flexDirection: 'column'
  },
  button: {
    flex: 1
  }
});

export default class Payment extends Component {
  constructor(props) {
    super(props);

    const orderDetails = this.props.navigation.state.params;

    this.state = {
      is_ordering_bright: orderDetails.bright_counter !== '0',
      is_ordering_commercial: orderDetails.commercial_counter !== '0',
      is_ordering_elpiji: orderDetails.elpiji_counter !== '0',
      is_ordering_melon: orderDetails.melon_counter !== '0',
      is_ordering_musicool: orderDetails.musicool_counter !== '0',
      order_details: orderDetails
    };
  }

  _processPayment() {
    let toast = Toast.show('Thanks! Your order is being processed :)', {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        onHidden: () => {
            this.props.navigation.goBack()
        }
    });
  }

  render() {
    const brightMessage = this.state.is_ordering_bright ? <Text style={styles.paymentTextDetail}>Bright Total: { parseInt(this.state.order_details.bright_counter) * 20000 }</Text> : null
    const commercialMessage = this.state.is_ordering_commercial ? <Text style={styles.paymentTextDetail}>Commercial Total: { parseInt(this.state.order_details.commercial_counter) * 20000 }</Text> : null
    const elpijiMessage = this.state.is_ordering_elpiji ? <Text style={styles.paymentTextDetail}>Elpiji Total: { parseInt(this.state.order_details.elpiji_counter) * 20000 }</Text> : null
    const melonMessage = this.state.is_ordering_melon ? <Text style={styles.paymentTextDetail}>Melon Total: { parseInt(this.state.order_details.melon_counter) * 20000 }</Text> : null
    const musicoolMessage = this.state.is_ordering_musicool ? <Text style={styles.paymentTextDetail}>Musicool Total: { parseInt(this.state.order_details.musicool_counter) * 20000 }</Text> : null

    const paymentAmount = ( this.state.is_ordering_bright ? this.state.order_details.bright_counter * 20000 : 0 ) 
      + ( this.state.is_ordering_commercial ? this.state.order_details.commercial_counter * 20000 : 0 )
      + ( this.state.is_ordering_elpiji ? this.state.order_details.elpiji_counter * 20000 : 0 )
      + ( this.state.is_ordering_melon ? this.state.order_details.melon_counter * 20000 : 0 )
      + ( this.state.is_ordering_musicool ? this.state.order_details.musicool_counter * 20000 : 0 );

    return (
      <View style={styles.container}>
        <View style={styles.detailContainer}>
          {brightMessage}
          {commercialMessage}
          {elpijiMessage}
          {melonMessage}
          {musicoolMessage}
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.paymentTextDetail}>Total Payment: {paymentAmount}</Text>
          <Button style={styles.button} title="Pay" onPress={() => this._processPayment()}/>
        </View>
      </View>
    );
  }
}
