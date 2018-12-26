import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
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

import { StackActions, NavigationActions } from 'react-navigation';


import styles from "./styles";
import {MainRoot} from "../../App";




export default class Start extends Component {


    start() {
        // const resetAction = StackActions.reset({
        //     index: 0,
        //     actions: [
        //         NavigationActions.navigate({routeName: 'Main'}),
        //
        //     ]
        // })
        // this.props.navigation.dispatch(resetAction)
        //

      this.props.navigation.reset([NavigationActions.navigate({ routeName: 'App' })], 0);
       //
       // this.props.navigation.replace('App')
       // this.props.navigation.navigate('App');
    }


  render() {
    return (
        <Container style={styles.container}>
            <Header>
                <Left />

                <Body>
                <Title>start</Title>
                </Body>
                <Right />
            </Header>


            <Content padder>
                <Button onPress={() =>  this.start()   }>
                    <Text>push</Text>
                </Button>
            </Content>
        </Container>
    );
  }
}
