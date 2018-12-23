import React, { Component } from 'react'
// import { Text, StyleSheet, View } from 'react-native'


import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Right,
    Body,
    Text,
    Icon
} from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";

export default class MeScreen extends Component {
    // static navigationOptions = {
    //     title: 'ProfileSc',
    //
    //     tabBarLabel: 'tab2',
    //     tabBarIcon: ({ tintColor, focused, horizontal }) => (
    //         <Ionicons
    //             name={focused ? 'ios-settings' : 'ios-settings'}
    //             size={horizontal ? 20 : 26}
    //             style={{ color: tintColor }}
    //         />
    //     ),
    //
    //
    // }


    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left />

                    <Body>
                    <Title>profile</Title>
                    </Body>
                    <Right />
                </Header>

                <Content padder>

                        <Text>Me controller</Text>

                </Content>
            </Container>
        );
    }
}

// const styles = StyleSheet.create({})
