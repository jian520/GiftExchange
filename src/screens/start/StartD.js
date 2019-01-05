import React, {Component} from "react";
import {View} from "react-native";
import {
    Container,

    Content,
     H3,

} from "native-base";


import styles from "./styles";

import StartContentView from "./StartContentView"
import StartHeader from "./StartHeader";

import JumpButton from "../../commonComponents/JumpButton";
import Color from "../../commonComponents/Color";
import {isIphoneX, screenW} from "../../commonComponents/CommonUtil";
import {StackActions, NavigationActions} from 'react-navigation';

export default class StartD extends Component {
// 构造
    constructor(props) {
        super(props);
        // 初始状态

        this.keyWord = '';
    }

    start() {


        this.props.navigation.push("WelcomeHome");

    }


    render() {
        return (

            <Container style={[styles.container]}>

                <Content padder>

                    <StartHeader titltA='GiftExchange' titltB='讓你輕鬆認識新朋友！'/>

                    <StartContentView titleA='Step 5:见面交流，成为朋友' placeholder={'文字描述'} value={this.keyWord}
                                      onChangeText={(text) => this.keyWord = text}/>
                    <H3 style={{marginTop: 100,color:Color.white,marginLeft: 30}}>
                        快來體驗交換禮物的樂趣
                    </H3>

                </Content>
                <JumpButton btnTitle='繼續' onClick={this.start.bind(this)}
                            style={{position: 'absolute',
                    bottom: isIphoneX() ? 49:15,
                    backgroundColor: Color.carColor,
                    width: 100,
                    height: 35,
                    marginLeft: (screenW -100)/2,
                    borderRadius: 8,}}/>
            </Container>
        );
    }


}
