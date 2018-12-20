import React, {PureComponent, PropTypes} from 'react';
import {StatusBar, DeviceEventEmitter} from 'react-native';


import { createStackNavigator, createAppContainer } from 'react-navigation'




import HomeScreen from   "./screens/HomeScreen";
import ProfileScreen from './screens/ProfileScreen'



const navigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen }
})

const App = createAppContainer(navigator)

export default App

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF'
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5
//     }
// })

