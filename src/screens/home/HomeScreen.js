import React, {Component} from 'react'


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

import EvilIcons from "react-native-vector-icons/EvilIcons";
import BaseImg from "../../commonComponents/BaseImg";
import {isIphoneX, marginLR, marginTB, paddingTB, screenH, screenW} from "../../commonComponents/CommonUtil";
import Color from "../../commonComponents/Color";
import Column from "../../commonComponents/Column";
import common from "../../common/common";
import Dialog, {
     DialogContent,
    SlideAnimation,
} from 'react-native-popup-dialog';
import Row from "../../commonComponents/Row";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideAnimationDialog: false,
        }
    }


    shoppingView() {

        this.props.navigation.push("ShoppingScreen");
    }

    showSlideAnimationDialog() {
        this.setState({
            slideAnimationDialog: true,
        });
    }

    render() {

        const {navigation} = this.props;


        return (
            <Container style={styles.container}>
                <Header>
                    <Left/>
                    <Body>
                    <Title style={gStyles.textAColor}>Fate Date</Title>
                    </Body>
                    <Right>
                        <Entypo name='shop' size={25} style={{marginRight: 15}} onPress={() => {
                            this.shoppingView()
                        }}/>

                        <Ionicons name='ios-more' size={25} style={{marginRight: 5}}
                                  onPress={() => this.props.navigation.push("ExploreScreen")}/>
                    </Right>
                </Header>

                <Content>
                    <Thumbnail square source={BaseImg.StartImg.rest}
                               style={{
                                   width: screenW,
                                   height: 200,
                               }}
                    />
                    <List style={{backgroundColor: Color.pickBackground, height: 130}}>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail
                                    source={{uri: 'https://oss.zuimeimami.com/avatar/doctor_fC14530706150363566e0dce962bb/1520556522703.jpg'}}
                                    style={styles.avatastyle}/>
                            </Left>

                            <Body>

                            <Text style={{...marginTB(30, 5), color: Color.white}}>年龄：32</Text>
                            <Text style={{...paddingTB(5, 5), color: Color.white}}>性别：女性</Text>
                            <Text style={{...paddingTB(5, 5), color: Color.white}}>地址：Hong Kong TK</Text>

                            </Body>
                        </ListItem>
                    </List>
                    <List style={{backgroundColor: Color.gray, height: 80}}>
                        <ListItem avatar>
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
                                        onPress={()=>{this.showSlideAnimationDialog()}}
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
                    <List style={{backgroundColor: Color.pickBackground, height: 180}}>
                        <Column style={{marginLeft: 15, ...marginTB(5, 10)}}>
                            <Text style={{fontWeight: 'bold', color: Color.white, ...marginTB(5, 5)}}>
                                简介
                            </Text>
                            <Text style={{fontWeight: 'bold', color: Color.white}}>
                                Love traveling.want to see the world
                            </Text>
                        </Column>

                        <Column style={{marginLeft: 15, ...marginTB(30, 20)}}>
                            <Text style={{fontWeight: 'bold', color: Color.white, ...marginTB(5, 15)}}>
                                礼物代表了：
                            </Text>
                            <Text style={{fontWeight: 'bold', color: Color.white}}>
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
                                }} onPress={() => this.props.navigation.push('Personal')}>
                            <Text style={{color: Color.white}}>个人资料</Text>
                        </Button>
                    </List>
                    <Dialog
                        onDismiss={() => {
                            this.setState({ slideAnimationDialog: false });
                        }}
                        onTouchOutside={() => {
                            this.setState({ slideAnimationDialog: false });
                        }}
                        visible={this.state.slideAnimationDialog}
                        dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
                    >
                        <DialogContent>
                            <Column style={{height:370,backgroundColor:Color.white}}>
                                <Column  style={{margin:20}}>
                                    <Text style={[gStyles.textCColor,{ fontWeight : 'bold', fontSize : 18, textAlign : 'center'}]}>跳過排隊隊伍！</Text>
                                 </Column>
                                <Row verticalCenter style={{justifyContent:'space-between', marginTop : 20}}>
                                    <EvilIcons name='minus' size={40}
                                              onPress={() => alert('上一頁')}/>
                                <Thumbnail
                                    source={BaseImg.CommndImg.image1}
                                    style={{width:100,height:150}}/>

                                    <EvilIcons name='plus' size={40}
                                               onPress={() => alert('下一頁')}/>
                                </Row>
                                <Column style={{marginTop : 20,}}>
                                    <Text style={[gStyles.textCColor,{ textAlign : 'center'}]}>35人已經搶先一步對這位Bagel按贊！</Text>
                                    <Text style={[gStyles.textCColor,{ textAlign : 'center'}]}>必須經過至少6天，她才看見你</Text>
                                </Column>
                                <Button block  style={{marginTop:20,height:30,backgroundColor:Color.gray3}} onPress={() => { this.setState({
                                    slideAnimationDialog: false,
                                })}}>
                                    <Text style={gStyles.textCEolor}>立即訂閱</Text>
                                </Button>

                                <Button block  style={{backgroundColor:Color.white}} onPress={() => { this.setState({
                                    slideAnimationDialog: false,
                                })}}>
                                    <Text style={gStyles.textCColor}>NO Thanks</Text>
                                </Button>

                            </Column>
                        </DialogContent>
                    </Dialog>
                </Content>
            </Container>
        );
    }
}

// const styles = StyleSheet.create({})
