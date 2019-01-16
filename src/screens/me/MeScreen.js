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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import gStyles from "../../common/globalStyles";

import {marginTB, paddingTB, screenW} from "../../commonComponents/CommonUtil";
import Color from "../../commonComponents/Color";
import Entypo from "react-native-vector-icons/Entypo";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
    // }
    logout() {

     //   DeviceEventEmitter.emit('jian', 'ok' );
       // this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })], 0);
        this.props.navigation.push('Setting')

    }

    editprofile(){
        this.props.navigation.push('Editprofile')
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

                <Content style={gStyles.cbg}>

                    <List style={{backgroundColor: Color.white,height:100}} >
                        <ListItem  avatar onPress={() => this.editprofile()}>
                            <Left>
                                <Thumbnail source={{uri:'https://oss.zuimeimami.com/avatar/doctor_fC14530706150363566e0dce962bb/1520556522703.jpg'}}
                                           style={styles.avatastyle}/>
                            </Left>
                            <Body style={styles.bottmW}>
                            <Text style={{...paddingTB(-5,15),color:Color.black}}>JM</Text>
                            <Text style={{color:Color.black}}>查看和编辑个人档案</Text>
                            </Body>
                            <Right style={[styles.bottmW,marginTB(55,15)]}>
                                  <Button block style={{
                                      width: 100,
                                      backgroundColor: Color.white,
                                      alignSelf: "center",
                                      height: 30,
                                      borderRadius:10,
                                      borderWidth: 0.5,
                                      borderColor:Color.black
                                      }}>
                                    <Text style={{color:Color.red,top:1}}>不完整</Text>
                                </Button>
                            </Right>
                         </ListItem>
                    </List>

                    <Separator style={ [gStyles.cbg, {height: 0.5}]}/>

                    <List style={[styles.bottmW,{backgroundColor: Color.white}]}>
                    <ListItem icon onPress={() =>  this.logout()  } style={styles.bottmW}>
                        <Left style={{left:20}}>
                            <FontAwesome name='cogs'  size={20}/>


                         </Left>
                        <Body style={[styles.bottmW],{left:10}}>
                        <Text style={styles.textC}>偏好设置</Text>
                        </Body>

                    </ListItem>
                    </List>

                    <Separator style={ [gStyles.cbg, {height: 20}]}/>

                    <List style={{backgroundColor: Color.white}} >
                        <ListItem icon onPress={ ()=> this.props.navigation.push('Personal') }>
                            <Left style={{left:20}}>
                                <FontAwesome5 name='medapps'  size={20}/>
                            </Left>

                            <Body style={[styles.bottmW],{left:10}}>
                            <Text style={styles.textC}>Tips</Text>
                            </Body>

                        </ListItem>
                    </List>

                    <Separator style={ [gStyles.cbg, {height: 0.5}]}/>

                    <List style={{backgroundColor: Color.white}}>
                        <ListItem icon >
                            <Left style={{left:20}}>
                                <FontAwesome name='user-plus'  size={20}/>
                            </Left>
                            <Body style={[styles.bottmW],{left:10}}>
                            <Text style={styles.textC}>邀請朋友，賺取500</Text>
                            </Body>

                        </ListItem>
                    </List>

                    <Separator style={ [gStyles.cbg, {height: 0.5}]}/>

                    <List style={{backgroundColor: Color.white}}>
                        <ListItem icon >
                            <Left style={{left:20}}>
                                <Entypo size={20}  name="help-with-circle" />
                            </Left>
                            <Body style={[styles.bottmW],{left:10}}>
                            <Text style={styles.textC}>Help&Support</Text>
                            </Body>
                        </ListItem>
                    </List>

                    <Separator style={ [gStyles.cbg, {height: 0.5}]}/>

                    <List style={{backgroundColor: Color.white}}>
                        <ListItem icon >
                            <Left style={{left:20}}>
                                <FontAwesome name='cog'  size={20}/>
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
