import React, {Component} from 'react';
import {createBottomTabNavigator, createAppContainer} from "react-navigation";
import {BottomTabBar} from 'react-navigation-tabs';


import HomePage from '../page/home/HomePage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TABS = {

    HomePage: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: "最热",
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                    name={'whatshot'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },


}
