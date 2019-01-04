import React, { Component } from 'react'
  import { DeviceEventEmitter } from 'react-native'


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
import {NavigationActions, StackActions} from "react-navigation";

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
    logout() {

     //   DeviceEventEmitter.emit('jian', 'ok' );
       // this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })], 0);
        this.props.navigation.push('Setting')

    }

    render() {

        const { navigation } = this.props;


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

                    <Button onPress={() =>    this.logout()  }>
                        <Text>logout</Text>
                    </Button>

                </Content>
            </Container>
        );
    }
}

// const styles = StyleSheet.create({})
