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
    Text,
    Card,
    H3,
} from "native-base";

import { StackActions, NavigationActions } from 'react-navigation';

import Column from "../../commonComponents/Column";

import styles from "./styles";
import {MainRoot} from "../../App";
import StartContentView from "./StartContentView"
import StartHeader from "./StartHeader";
import {px2sp} from "../../commonComponents/CommonUtil";
import JumpButton from "./JumpButton";
import Color from "../../commonComponents/Color";




export default class Start extends Component {
// 构造
    constructor(props) {
        super(props);
        // 初始状态

        this.keyWord='';
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

   //   this.props.navigation.reset([NavigationActions.navigate({ routeName: 'App' })], 0);

       this.props.navigation.replace('App')
       // this.props.navigation.navigate('App');
    }


  render() {
    return (

        <Container style={[styles.container]}>
            {/*<Header >*/}
                {/*<Left />*/}

                {/*<Body>*/}
                {/*<Title>start</Title>*/}
                {/*</Body>*/}
                {/*<Right />*/}
            {/*</Header>*/}


            <Content padder >

                 <StartHeader titltA='GiftExchange' titltB='让你轻松的认识新朋友'/>

                  <StartContentView titleA='Step 1:挑选一份礼物代表你的心意'  placeholder={'请输入想说的'} value={this.keyWord}
                                    onChangeText={(text) => this.keyWord = text} />



                <View style={{marginTop:50 }}>
                    <Button  style={{alignSelf:"center",backgroundColor:Color.carColor,height:60,borderRadius:30,width:60}} onPress={() =>  this.start()   }>
                        <Text style={{alignSelf:'center'}}> > </Text>
                    </Button>
                </View>

            </Content>
            <JumpButton btnTitle='跳转'/>
        </Container>
    );
  }


}
