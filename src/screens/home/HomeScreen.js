import React, { Component } from 'react'
// import { Text, StyleSheet, View, Button } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Right,
    Body,
    Text
} from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";

export default class HomeScreen extends Component {
    // static navigationOptions = {
    //   //  title: 'Home1',
    //     tabBarLabel: 'tab1',
    //     tabBarIcon: ({ tintColor, focused, horizontal }) => (
    //         <Ionicons
    //             name={focused ? 'ios-home' : 'ios-home'}
    //             size={horizontal ? 20 : 26}
    //             style={{ color: tintColor }}
    //         />
    //     ),
    // }



    render() {

        const { navigation } = this.props;


        return (
            <Container style={styles.container}>
                <Header>
                    <Left />
                    <Body>
                    <Title>Home</Title>
                    </Body>
                    <Right />
                </Header>

                <Content padder>
                    <Button onPress={() =>   navigation.push('Test')   }>
                        <Text>push</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

// const styles = StyleSheet.create({})
