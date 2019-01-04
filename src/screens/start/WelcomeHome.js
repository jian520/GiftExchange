import React, {Component} from "react";
import {
    Image,

} from 'react-native';
import {
    Container,
    H3,
    Button,
    Text
} from "native-base";


import styles from "./styles";
import {isIphoneX, marginTB, paddingTB, screenH, screenW, wh} from "../../commonComponents/CommonUtil";
import BaseImg from "../../commonComponents/BaseImg";
import Row from "../../commonComponents/Row";
import Color from "../../commonComponents/Color";
import Column from "../../commonComponents/Column";
import JumpButton from "./StartD";




export default class WelcomeHome extends Component {
// 构造
    constructor(props) {
        super(props);
        // 初始状态

    }

    doLogin() {

        this.props.navigation.push("Login")


    }



    render() {
        return (

            <Container style={[styles.container]}>

                    <Image style={{

                        resizeMode:'stretch',
                        width:screenW,
                        height:isIphoneX() ?  88 +screenH *0.35:screenH *0.35,
                    }}
                     source={BaseImg.StartImg.rest}/>
                    
                <Row horizontalCenter style={{...marginTB(50,50)}}>
                    <H3 style={{color:Color.white}}>歡迎來到</H3>
                    <H3 style={{color:Color.orange}}>GiftExchange</H3>
                </Row>

                <Column  style={{alignItems: 'center',justifyContent: 'center'}}>
                    <H3 style={{color:Color.white,...paddingTB(5,5)}}>選取一份禮物</H3>
                    <H3 style={{color:Color.white,...paddingTB(5,5)}}>認識一個你欣賞的人</H3>
                    <H3 style={{color:Color.white,...paddingTB(5,5)}}>見面交流。成為朋友</H3>
                </Column>

                <Column style={{alignItems: 'center',
                    justifyContent: 'center', ...marginTB(200,20)}}>
                <Button
                        style={{
                            width:150,
                            ...marginTB(10,15),
                            backgroundColor:Color.white,
                            alignSelf:"center",
                            height:35,
                           }}>
                    <Text style={{color:Color.red,...paddingTB(5,5),marginLeft: 30}}>註冊用戶</Text>
                </Button>
                <Button  onPress={() => this.doLogin()}
                        style={{
                            width:150,
                            backgroundColor:Color.white,
                            alignSelf:"center",
                            height:35,
                      ...marginTB(15,15),
                        }}     >
                    <Text style={{color:Color.red,...paddingTB(5,5),marginLeft:50}}>登入</Text>
                </Button>
                </Column>
            </Container>
        );
    }


}
