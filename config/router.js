import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Registration from '../screens/Registration';
import Order from '../screens/Order';
import Payment from '../screens/Payment';
import Track from '../screens/Track';
import Statistic from '../screens/Statistic';

const OrderStack = StackNavigator({
	Order: {
		screen: Order
	},
	Payment: {
		screen: Payment
	}
});

const TrackStack = StackNavigator({
	Track: {
		screen: Track
	}
});

const StatisticStack = StackNavigator({
	Statistic: {
		screen: Statistic
	}
});

export const HomeScreen = TabNavigator({
	OrderStack: {
		screen: OrderStack,
		navigationOptions: {
			title: 'Orders'
		}
	},
	TrackStack: {
		screen: TrackStack,
		navigationOptions: {
			title: 'Track LPG'
		}
	},
	StatisticStack: {
		screen: StatisticStack,
		navigationOptions: {
			title: 'Stats'
		}
	}
}, {
	navigationOptions: ({ navigation }) => ({
	  tabBarIcon: ({ focused, tintColor }) => {
	    const { routeName } = navigation.state;
	    let iconName;
	    if (routeName === 'OrderStack') {
	      iconName = `ios-card${focused ? '' : '-outline'}`;
      	} else if (routeName === 'TrackStack') {
	      iconName = `ios-navigate${focused ? '' : '-outline'}`;
	    } else if (routeName === 'StatisticStack') {
	      iconName = `ios-trending-up${focused ? '' : '-outline'}`;
	    }

	    return <Ionicons name={iconName} size={25} color={tintColor} />;
	  },
	})
});

export const Root = StackNavigator({
	Login: {
		screen: Login,
		navigationOptions: {
			title: 'Login'
		}
	},
	Home: {
		screen: HomeScreen,
		header: null
	},
	Registration: {
		screen: Registration,
		navigationOptions: {
			title: 'Registration'
		}	
	}
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});
