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


       this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Main' })], 0);

      //  this.props.navigation.replace('Main')


    }


  render() {
    return (

        <Container style={[styles.container]}>
            <Header >
                <Left />

                <Body>
                <Title>start</Title>
                </Body>
                <Right />
            </Header>


            <Content padder>
                <Text>GifExchang</Text>
                <Text>让你轻松找到新朋友</Text>
                <Button onPress={() =>  this.start()   }>
                    <Text>push</Text>
                </Button>
            </Content>
        </Container>
    );
  }
}
