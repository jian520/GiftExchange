import React, { Component } from 'react'
import { DeviceEventEmitter } from 'react-native'

import {
    Container,
    Header,
    Title,
    Content,
    ListItem,
    Left,
    Right,
    Body,
    Text,
    List,
    Thumbnail,
    Icon,
    Button,
    Separator,
    Item,
    View, ActionSheet
} from "native-base";

import styles from "./styles";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import gStyles from "../../common/globalStyles";

import { marginTB, paddingTB, screenW } from "../../commonComponents/CommonUtil";
import Color from "../../commonComponents/Color";
import Entypo from "react-native-vector-icons/Entypo";
import ShareUtile from '../../native/ShareUtil'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import common from "../../common/common";
import { NavigationActions } from "react-navigation";
import service from "../../common/service";

var BUTTONS = [
    { text : "確定", icon : "american-football", iconColor : "#2c8ef4" },

    { text : "取消", icon : "close", iconColor : "#25de5b" }
];
var DESTRUCTIVE_INDEX = 0;
var CANCEL_INDEX = 1;

export default class MeScreen extends Component {

    logout() {
        // service.logout()
        this.props.navigation.reset([ NavigationActions.navigate({ routeName : 'WelcomeHome' }) ], 0);
    }

    editprofile() {
        this.props.navigation.push('Editprofile')
    }

    shareboard(){
        var list = [0,1,2,3,4]
        ShareUtile.shareboard('sssss','http://dev.umeng.com/images/tab2_1.png','http://www.umeng.com/','title',list,(code,message) =>{
            this.setState({result:message});

        });
    }

    render() {

        const { navigation } = this.props;

        return (
            <Container style={styles.container}>
                <Header>
                    <Left/>

                    <Body>
                    <Title style={gStyles.textAColor}>我</Title>
                    </Body>
                    <Right>
                        <Title style={gStyles.textAColor}>605</Title>
                        <Entypo name="flower" style={{ color : Color.red, marginRight : 10 }} size={15}/>
                    </Right>

                </Header>

                <Content style={gStyles.cbg}>

                    <List style={{ backgroundColor : Color.white, height : 100 }}>
                        <ListItem avatar onPress={() => this.editprofile()}>
                            <Left>
                                <Thumbnail source={{ uri : 'https://oss.zuimeimami.com/avatar/doctor_fC14530706150363566e0dce962bb/1520556522703.jpg' }}
                                           style={styles.avatastyle}/>
                            </Left>
                            <Body style={styles.bottmW}>
                            <Text style={{ ...paddingTB(-5, 15), color : Color.black }}>JM</Text>
                            <Text style={{ color : Color.black }}>查看和编辑个人档案</Text>
                            </Body>
                            <Right style={[ styles.bottmW, marginTB(55, 15) ]}>
                                <Button block style={{
                                    width : 100,
                                    backgroundColor : Color.white,
                                    alignSelf : "center",
                                    height : 30,
                                    borderRadius : 10,
                                    borderWidth : 0.5,
                                    borderColor : Color.black
                                }}>
                                    <Text style={{ color : Color.red, top : 1 }}>不完整</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>

                    <List style={[ { backgroundColor : Color.white } ]}>
                        <ListItem icon onPress={() => this.props.navigation.push('Setting')}>
                            <Left>
                                <FontAwesome name='cogs' size={20}/>

                            </Left>
                            <Body style={[ styles.bottmW, { left : 5 } ]}>
                            <Text style={styles.textC}>偏好设置</Text>
                            </Body>

                        </ListItem>
                    </List>

                    <Separator style={[ gStyles.cbg, { height : 20 } ]}/>

                    <List style={{ backgroundColor : Color.white }}>
                        <ListItem icon>
                            <Left>
                                <FontAwesome5 name='medapps' size={20}/>
                            </Left>

                            <Body style={[ styles.bottmW, { left : 5 } ]}>
                            <Text style={styles.textC}> Tips</Text>
                            </Body>

                        </ListItem>
                    </List>

                    <Separator style={[ gStyles.cbg, { height : 1 } ]}/>

                    <List style={{ backgroundColor : Color.white }}>
                        <ListItem icon style={{ backgroundColor : Color.white }}  onPress={() => this.shareboard()}>
                            <Left>
                                <FontAwesome name='user-plus' size={20}/>
                            </Left>
                            <Body style={{ borderBottomWidth : 0, left : 5 }}>
                            <Text style={styles.textC}>邀請朋友，賺取500</Text>
                            </Body>

                        </ListItem>
                    </List>

                    <Separator style={[ gStyles.cbg, { height : 1 } ]}/>

                    <List style={{ backgroundColor : Color.white }}>
                        <ListItem icon onPress={() => this.props.navigation.push("HelpScreen")}>
                            <Left>
                                <Entypo size={20} name="help-with-circle"/>
                            </Left>
                            <Body style={{ borderBottomWidth : 0, left : 5 }}>
                            <Text style={styles.textC}>Help&Support</Text>
                            </Body>
                        </ListItem>
                    </List>

                    <Separator style={[ gStyles.cbg, { height : 1 } ]}/>

                    <List style={{ backgroundColor : Color.white }}>
                        <ListItem icon onPress={() => this.props.navigation.push("SettingScreen")}>
                            <Left>
                                <FontAwesome name='cog' size={20}/>
                            </Left>
                            <Body style={{ borderBottomWidth : 0, left : 5 }}>
                            <Text style={styles.textC}>設定</Text>
                            </Body>

                        </ListItem>
                    </List>

                    <View style={{ flex : 1, alignItems : "center", flexWrap : "wrap", marginLeft : 15, marginRight : 15, marginTop : 40 }}>
                        <Button block style={{ backgroundColor : common.colorA }}
                                onPress={() =>
                                    ActionSheet.show(
                                        {
                                            options : BUTTONS,
                                            cancelButtonIndex : CANCEL_INDEX,
                                            destructiveButtonIndex : DESTRUCTIVE_INDEX,
                                            title : "確定退出登錄？"
                                        },
                                        buttonIndex => {
                                            if (buttonIndex == 0) {


                                                //延迟多久执行(只执行一次)
                                                // this.timer = setTimeout(()=> {
                                                this.logout()
                                                // }, 1000);

                                            }
                                        }
                                    )}

                        >
                            <Text>退出登錄</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

// const styles = StyleSheet.create({})
