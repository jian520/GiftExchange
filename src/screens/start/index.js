import React, {Component} from "react";
import {ImageBackground, View, StatusBar} from "react-native";
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
    Card,
    H3,
} from "native-base";

import {StackActions, NavigationActions} from 'react-navigation';


import styles from "./styles";
import {MainRoot} from "../../App";
import StartContentView from "./StartContentView"
import StartHeader from "./StartHeader";
import JumpButton from "./JumpButton";
import PushButton from "../../commonComponents/PushButton";


export default class Start extends Component {
// 构造
    constructor(props) {
        super(props);
        // 初始状态

        this.keyWord = '';
    }

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

        this.props.navigation.reset([NavigationActions.navigate({routeName: 'App'})], 0);
        //
        // this.props.navigation.replace('App')
        // this.props.navigation.navigate('App');
    }


    render() {
        return (

            <Container style={[styles.container]}>
                  <Content padder>

                    <StartHeader titltA='GiftExchange' titltB='讓你輕鬆認識新朋友！'/>
                    <StartContentView titleA='Step 1:挑選一份禮物代表你的心意' placeholder={'请输入想说的......'} value={this.keyWord}
                                      onChangeText={(text) => this.keyWord = text}/>

                    <PushButton onClick={() => this.props.navigation.push("StartA")}/>

                </Content>
                <JumpButton btnTitle='跳转' onClick={this.start.bind(this)} />

            </Container>
        );
    }

}
