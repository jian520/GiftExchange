import React, {Component} from "react";
import {
    StyleSheet,
    Image,
    AsyncStorage,
    TouchableOpacity,
    TouchableHighlight,
    ActivityIndicator,
    ScrollView,
    Keyboard,
    KeyboardAvoidingView,
    DeviceEventEmitter,
    InteractionManager
} from 'react-native'
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Body,
    Left,
    Right,
    Item,
    Input,
    Separator,
    Thumbnail,
    View,
    Text,
    Footer,
    FooterTab
} from "native-base";
import styles from "./styles";
import gStyles from "../../common/globalStyles"
import common from "../../common/common"


import service from "../../common/service"
import User from '../../model/User'
import CountdownUtil from "../../common/CountdownUtil"
import {marginLR} from "../../commonComponents/CommonUtil";



export default class RegSetpA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            code: '',
            inputCode:'',
            timerTitle: '獲取驗證碼',
            email: '',
            password: '',
            confirmPassword: '',
            loading: false,
            isSentVerify: true,


            rate:1,
            muted:false,
            resizeMode:'cover',
            paused:true,
        };
    }

    onPhoneChanged(text) {
        this.setState({phone: text});
    }

    onCodeChanged(text) {
        this.setState({inputCode: text});
    }

    onEmailChanged(text) {
        this.setState({email: text});
    }

    onPwdChanged(text) {
        this.setState({password: text});
    }

    onPwdConfirmChanged(text) {
        this.setState({confirmPassword: text});
    }


    sendSMSCode() {

        // Keyboard.dismiss()
        console.log('sendSMSCode')
        if (this.state.loading) return;

        if (this.state.phone.length != 8) {
            common.toast("請輸入8位手機號！")
            return;
        }

        this.setState({
            loading: true,
        });

        if (this.state.isSentVerify === true) {
            // 倒计时时间
            let countdownDate = new Date(new Date().getTime() + 60 * 1000)

            service.checkPhone(this.state.phone)
                .then((wrapData) => {

                    this.setState({
                        loading: false,
                    });

                    if (wrapData.flag == 'Success') { //存在
                        common.toast(wrapData.msg)

                        // //可以点
                        // this.setState({
                        //     isSentVerify: true
                        // });

                    } else {
                        var code = Math.floor(Math.random()*9000)+1000;
                        alert(code);
                        // common.toast(wrapData.msg)
                        //点击之后验证码不能发送网络请求
                        this.setState({
                            isSentVerify: false,
                            code: code,
                        });


                        CountdownUtil.settimer(countdownDate, (time) => {
                            this.setState({
                                timerTitle: time.sec > 0 ? '剩余' + time.sec + 's' : '重新获取'
                            }, () => {
                                if (this.state.timerTitle == "重新获取") {
                                    this.setState({
                                        isSentVerify: true
                                    })
                                }
                            })
                        })

                    }


                }).then((items) => {

            }).catch((error) => {
                console.log(error);

                this.setState({
                    loading: false,
                    isSentVerify: true,
                });
            })
        }


    }

    buttonClickStatus() {
        if (this.state.isSentVerify) {

            return (
                <Button block rounded style={{backgroundColor: common.colorA, width: 120}}
                        onPress={() => this.sendSMSCode()}>
                    <Text>{this.state.timerTitle}</Text>
                </Button>
            )
        }
        return (
            <Button  rounded disabled  >
                <Text>{this.state.timerTitle}</Text>
            </Button>
        )
    }

    doReg() {
        this.props.navigation.push("RegB")

        return

        Keyboard.dismiss()
        console.log('doReg')
        if (this.state.loading) return;


        if (this.state.phone.length != 8) {
            common.toast("請輸入8位手機號！")
            return;
        }
        if (this.state.inputCode == '') {
            common.toast("請輸入驗證碼")
            return;
        }

        if (this.state.inputCode != this.state.code) {
            common.toast("驗證碼不正確")
            return;
        }

        if (this.state.email == '') {
            common.toast("請輸入郵件！")
            return;
        }
        if (!common.validateEmail(this.state.email)) {
            common.toast("郵件格式不正確！")
            return;
        }
        if (this.state.password == '') {

            common.toast("請輸入密碼！")
            return;
        }
        if (this.state.password.length < 6) {
            common.toast("請輸入6位以上密碼！")
            return;
        }
        if (this.state.password != this.state.confirmPassword) {
            common.toast("兩次輸入的密碼不一致！")
            return
        }
        this.setState({
            loading: true,

        });

        service.checkReg(this.state.phone, this.state.email)
            .then((wrapData) => {
                console.log('wrapData  ')
                console.log(wrapData)
                this.setState({
                    loading: false,
                });

                if (wrapData.flag == 'Success') {

                    var user = Object.create(User);
                    user.phone = this.state.phone
                    user.password = this.state.password
                    user.email = this.state.email
                    this.props.navigation.navigate("reg2", {user: user})
                } else {
                    common.toast(wrapData.msg)
                }

            }).then((items) => {

        }).catch((error) => {
            console.log(error);

            this.setState({
                loading: false,
            });
        })

    }


    _onLoadStart(){
        console.log('is start');
    }
    _onLoad(){
        console.log('is load');
    }
    _onProgress(){
        console.log('is progress')
    }
    _onEnd(){
        console.log('is end')
    }
    _onError(e){
        console.log(e);
        console.log('is Error');
    }




    render() {

        return (
            <Container style={gStyles.cbg}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" style={{color: "#000"}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={gStyles.textAColor}>註冊</Title>
                    </Body>
                    <Right/>
                </Header>

                <Content style={gStyles.containerView}>
                    <View style={styles.containerView}>
                         <Item style={styles.input}>
                             <Input placeholder="名"
                                    placeholderTextColor={common.colorC}

                                    onChangeText={(e) => {
                                        this.onPhoneChanged(e)
                                    }}
                             />
                         </Item>

                         <Item style={styles.input}>
                             <Input placeholder="姓氏"
                                    placeholderTextColor={common.colorC}

                                    onChangeText={(e) => {
                                        this.onPhoneChanged(e)
                                    }}
                             />
                         </Item>



                         <Item style={styles.input}>
                             <Input placeholder="郵箱地址"
                                    placeholderTextColor={common.colorC}

                                    onChangeText={(e) => {
                                        this.onPhoneChanged(e)
                                    }}
                             />
                         </Item>


                         <Item style={styles.input}>
                             <Input placeholder="聯絡電話"
                                    placeholderTextColor={common.colorC}

                                    onChangeText={(e) => {
                                        this.onPhoneChanged(e)
                                    }}
                             />
                         </Item>

                    </View>
                    <Button block warning style={{...marginLR(30, 30)}} onPress={() => this.doReg()}>
                        <Text>繼續</Text>
                    </Button>

                </Content>

            </Container>
        );
    }
}

