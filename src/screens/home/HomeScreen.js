import React, { Component } from 'react'


import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Right,
    Body,
    Text, Thumbnail, List, ListItem, Item
} from "native-base";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import gStyles from "../../common/globalStyles"
import styles from "./styles";
import globalStyles from "../../common/globalStyles";
import BaseImg from "../../commonComponents/BaseImg";
import {isIphoneX, marginLR, marginTB, paddingTB, screenH, screenW} from "../../commonComponents/CommonUtil";
import Color from "../../commonComponents/Color";
import Column from "../../commonComponents/Column";

export default class HomeScreen extends Component {
    // static navigationOptions = {
    //   //  title: 'Home1',
    //     tabBarLabel: 'tab1',
    //     tabBarIcon: ({ tintColor, focused, horizontal }) => (
    //         <Ionicons
    //             name={focused ? 'ios-home' : 'ios-home'}
    //             size={horizontal ? 20 : 26}
    //             style={{ color: tintColor }}
    //         />
    //     ),
    // }

    shoppingView(){

        this.props.navigation.push("ShoppingScreen");
    }

    render() {

        const { navigation } = this.props;


        return (
            <Container style={styles.container}>
                <Header>
                    <Left />
                    <Body>
                    <Title style={gStyles.textAColor}>Fate Date</Title>
                    </Body>
                    <Right>
                         <Entypo name='shop' size={25} style={{marginRight: 15}} onPress={ ()=>{this.shoppingView()}}/>

                         <Ionicons name='ios-more' size={25} style={{marginRight: 5}} onPress={ ()=>this.props.navigation.push("ExploreScreen")}/>
                    </Right>
                </Header>

                <Content>
                    <Thumbnail square source={BaseImg.StartImg.rest}
                               style={{
                                   width: screenW,
                                   height: 200,
                               }}
                    />
                    <List style={{backgroundColor: Color.pickBackground,height:130}} >
                        <ListItem  avatar>
                            <Left>
                                <Thumbnail source={{uri:'https://oss.zuimeimami.com/avatar/doctor_fC14530706150363566e0dce962bb/1520556522703.jpg'}}
                                           style={styles.avatastyle}/>
                            </Left>

                            <Body>

                                <Text style={{...marginTB(30,5),color:Color.white}}>年龄：32</Text>
                                <Text style={{...paddingTB(5,5),color:Color.white}}>性别：女性</Text>
                                <Text style={{...paddingTB(5,5),color:Color.white}}>地址：Hong Kong TK</Text>

                            </Body>
                        </ListItem>
                    </List>
                    <List style={{backgroundColor: Color.gray,height:80}} >
                        <ListItem  avatar>
                            <Left>
                                <Button block
                                        style={{
                                            width: 120,
                                            backgroundColor: Color.white,
                                            alignSelf: "center",
                                            height: 45,
                                            ...paddingTB(5, 10)
                                        }}>
                                    <Text style={{color: Color.red}}>跳过</Text>
                                </Button>
                            </Left>
                            <Body style={{borderBottomWidth: 0}}/>
                            <Right style={{borderBottomWidth: 0}}>
                                <Button block
                                        style={{
                                            width: 120,
                                            backgroundColor: Color.white,
                                            alignSelf: "center",
                                            height: 45,
                                            ...marginTB(10, 10)
                                        }}>
                                    <Text style={{color: Color.blue}}>Talk&Exchange</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                    <List style={{backgroundColor: Color.pickBackground,height:180}} >
                         <Column style={{marginLeft:15,...marginTB(5,10)}}>
                             <Text style={{fontWeight: 'bold',color:Color.white,...marginTB(5,5)}}>
                                 简介
                             </Text>
                             <Text style={{fontWeight: 'bold',color:Color.white}}>
                                 Love traveling.want to see the world
                             </Text>
                         </Column>

                        <Column style={{marginLeft:15,...marginTB(30,20)}}>
                            <Text style={{fontWeight: 'bold',color:Color.white,...marginTB(5,15)}}>
                                礼物代表了：
                            </Text>
                            <Text style={{fontWeight: 'bold',color:Color.white}}>
                                Movies,a good book and be with friend
                            </Text>
                        </Column>
                        <Button block
                                style={{
                                    width: 120,
                                    backgroundColor: Color.reseda,
                                    alignSelf: "center",
                                    height: 30,
                                    ...marginTB(15, 15),

                                }}>
                            <Text style={{color: Color.white}}>个人资料</Text>
                        </Button>
                    </List>
                    {/*<Button onPress={() =>   navigation.push('Test')   }>*/}
                        {/*<Text>push</Text>*/}
                    {/*</Button>*/}
                </Content>
            </Container>
        );
    }
}

// const styles = StyleSheet.create({})
