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

export default class TestScreen extends Component {
    static navigationOptions = {
        title: 'ProfileSc',

        tabBarLabel: 'tab2',
        tabBarIcon: ({ tintColor, focused, horizontal }) => (
            <Ionicons
                name={focused ? 'ios-settings' : 'ios-settings'}
                size={horizontal ? 20 : 26}
                style={{ color: tintColor }}
            />
        ),


    }


    render() {
        const { navigation } = this.props;


        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => navigation.pop()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                    <Title>test</Title>
                    </Body>
                    <Right />
                </Header>

                <Content padder>
                    <Button onPress={() => navigation.pop()}>
                        <Text>Back</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

// const styles = StyleSheet.create({})
