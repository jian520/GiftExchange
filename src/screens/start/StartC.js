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
import PushButton from "../../commonComponents/PushButton";




export default class StartC extends Component {
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

                    <StartContentView titleA='Step 4:约定时间地点进行礼物交换'  placeholder={'文字描述'} value={this.keyWord}
                                      onChangeText={(text) => this.keyWord = text} />



                    <PushButton onClick={() =>   this.props.navigation.push('StartD') }/>

                </Content>
                <JumpButton btnTitle='跳转' onClick={this.start.bind(this)}/>
            </Container>
        );
    }


}
