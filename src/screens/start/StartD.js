import React, { Component } from "react";
import { View } from "react-native";
import {
    Container,

    Content,
    Button,

    Text,

} from "native-base";



import styles from "./styles";

import StartContentView from "./StartContentView"
import StartHeader from "./StartHeader";

import JumpButton from "./JumpButton";
import Color from "../../commonComponents/Color";




export default class StartD extends Component {
// 构造
    constructor(props) {
        super(props);
        // 初始状态

        this.keyWord='';
    }

    start() {


        this.props.navigation.reset([NavigationActions.navigate({ routeName: 'App' })], 0);

    }


    render() {
        return (

            <Container style={[styles.container]}>

                <Content padder >

                    <StartHeader titltA='GiftExchange' titltB='让你轻松的认识新朋友'/>

                    <StartContentView titleA='Step 5:见面交流，成为朋友'  placeholder={'文字描述'} value={this.keyWord}
                                      onChangeText={(text) => this.keyWord = text} />
 
                </Content>
                <JumpButton btnTitle='跳转' onClick={this.start.bind(this)}/>
            </Container>
        );
    }


}
