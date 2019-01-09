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
    View
} from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import {NavigationActions, StackActions} from "react-navigation";
import gStyles from "../../common/globalStyles";
import BaseImg from "../../commonComponents/BaseImg";
import {marginTB, paddingTB, screenW} from "../../commonComponents/CommonUtil";
import Color from "../../commonComponents/Color";
import commonColor from "../../../native-base-theme/variables/commonColor";
import {Col} from "react-native-easy-grid";

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
                    <Title style={gStyles.textAColor}>我</Title>
                    </Body>
                    <Right>
                        <Title style={gStyles.textAColor}>605</Title>
                        <Ionicons
                            name={'ios-home'}
                            size={26}
                            style={gStyles.textAColor}
                        />
                    </Right>

                </Header>

                <Content>

                    <List style={{backgroundColor: Color.gray,height:100}} >
                        <ListItem  avatar >
                            <Left>
                                <Thumbnail source={BaseImg.StartImg.heart} style={styles.avatastyle}/>
                            </Left>
                            <Body style={styles.bottmW}>
                            <Text style={{...paddingTB(-5,15),color:Color.white}}>JM</Text>
                            <Text style={{color:Color.white}}>查看和编辑个人档案</Text>
                            </Body>
                            <Right style={[styles.bottmW,marginTB(55,15)]}>
                                  <Button block style={{
                                      width: 100,
                                      backgroundColor: Color.white,
                                      alignSelf: "center",
                                      height: 30,
                                      borderRadius:10,
                                      }}>
                                    <Text style={{color:Color.red,top:1}}>不完整</Text>
                                </Button>
                            </Right>
                         </ListItem>
                    </List>
                    <Separator style={{backgroundColor: Color.white, height: 0.5}}/>
                    <List style={{backgroundColor: Color.gray}}>
                    <ListItem icon onPress={() =>  this.logout()  }>
                        <Left style={{left:20}}>
                             <Icon active name="ios-home" />
                         </Left>
                        <Body style={[styles.bottmW],{left:10}}>
                        <Text style={styles.textC}>偏好设置</Text>
                        </Body>

                    </ListItem>
                    </List>
                    <Separator style={{backgroundColor: Color.white, height: 20}}/>
                    <List style={{backgroundColor: Color.gray}}>
                        <ListItem icon >
                            <Left style={{left:20}}>
                                <Icon active name="ios-home" />
                            </Left>
                            <Body style={[styles.bottmW],{left:10}}>
                            <Text style={styles.textC}>Tips</Text>
                            </Body>

                        </ListItem>
                    </List>
                    <Separator style={{backgroundColor: Color.white, height: 0.5}}/>
                    <List style={{backgroundColor: Color.gray}}>
                        <ListItem icon >
                            <Left style={{left:20}}>
                                <Icon active name="ios-home" />
                            </Left>
                            <Body style={[styles.bottmW],{left:10}}>
                            <Text style={styles.textC}>邀請朋友，賺取500</Text>
                            </Body>

                        </ListItem>
                    </List>
                    <Separator style={{backgroundColor: Color.white, height: 0.5}}/>
                    <List style={{backgroundColor: Color.gray}}>
                        <ListItem icon >
                            <Left style={{left:20}}>
                                <Icon active name="ios-home" />
                            </Left>
                            <Body style={[styles.bottmW],{left:10}}>
                            <Text style={styles.textC}>Help&Support</Text>
                            </Body>

                        </ListItem>
                    </List>
                    <Separator style={{backgroundColor: Color.white, height: 0.5}}/>
                    <List style={{backgroundColor: Color.gray}}>
                        <ListItem icon >
                            <Left style={{left:20}}>
                                <Icon active name="ios-home" />
                            </Left>
                            <Body style={[styles.bottmW],{left:10}}>
                            <Text style={styles.textC}>設定</Text>
                            </Body>

                        </ListItem>
                    </List>
                    {/*<Button onPress={() =>    this.logout()  }>*/}
                        {/*<Text>logout</Text>*/}
                    {/*</Button>*/}

                </Content>
            </Container>
        );
    }
}

// const styles = StyleSheet.create({})
