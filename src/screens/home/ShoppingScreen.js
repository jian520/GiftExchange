/**
  * desc：
  * author：
  * date： 
  */
import React, {Component} from 'react';

import {Body, Button, Container, Content, Header, Icon, Item, Right, Text, Title,H3,Left} from "native-base";
import styles from "../home/styles";
import gStyles from "../../common/globalStyles";
import Color from "../../commonComponents/Color";
import Entypo from "react-native-vector-icons/Entypo";
import Row from "../../commonComponents/Row";
import {Col} from "react-native-easy-grid";
export default class ShoppingScreen  extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    static propTypes = {}

    /**
     * 初始化了状态之后，在第一次绘制 render() 之前
     * （能够使用setState()来改变属性 有且只有一次）
     */
    componentWillMount() {

    }

    /**
     * 这个函数开始，就可以和 JS 其他框架交互了，例如设置计时 setTimeout 或者 setInterval，
     * 或者发起网络请求。这个函数也是只被调用一次
     * （能够使用setState()来改变属性 有且只有一次）
     */
    componentDidMount() {

    }

    /**
     * 输入参数 nextProps 是即将被设置的属性，旧的属性还是可以通过 this.props 来获取。在这个回调函数里面，你可以根据属性的变化，
     * 通过调用 this.setState() 来更新你的组件状态，这里调用更新状态是安全的，并不会触发额外的 render()
     * （能够使用setState()来改变属性 多次调用）
     */
    componentWillReceiveProps() {

    }

    /**
     * 当组件接收到新的属性和状态改变的话，都会触发调用 shouldComponentUpdate(...)
     * （不能够使用setState()来改变属性 多次调用）
     */
    shouldComponentUpdate() {

    }

    /**
     * 如果组件状态或者属性改变，并且上面的 shouldComponentUpdate(...) 返回为 true，就会开始准更新组件
     * （不能够使用setState()来改变属性 多次调用）
     */
    componentWillUpdate() {

    }

    /**
     * 调用了 render() 更新完成界面之后，会调用 componentDidUpdate() 来得到通知
     * （不能够使用setState()来改变属性 多次调用）
     */
    componentDidUpdate() {

    }

    /**
     * 组件要被从界面上移除的时候，就会调用 componentWillUnmount()
     * （不能够使用setState()来改变属性 有且只有一次调用）
     */
    componentWillUnmount() {

    }

    render() {
        return (
            <Container style={gStyles.cbg}>
                <Header>
                    <Left>
                    <Button transparent onPress={() =>this.props.navigation.goBack()}>
                        <Icon name="arrow-back" style={{color: "#000"}}/>
                    </Button>
                    </Left>
                    <Body>
                    <Title>商店</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    <Button block onPress={() =>   navigation.push('Test') } style={styles.shoppingBtn}>
                        <H3 style={{color:Color.white}}>订阅高级功能</H3>
                    </Button>

                    <Item style={[styles.bottmW,{height:50,alignItems: 'center',justifyContent: 'center'}]}>
                        <Entypo name="flower" style={{color: Color.red,marginRight: 10}} size={25}/>
                        <Text>购买豆豆</Text>
                    </Item>

                    <Item style={[{backgroundColor:Color.white,height:45,marginTop: 30}]}>
                         <Row verticalCenter style={{paddingLeft: 30}}>
                            <Text>3000</Text>
                            <Entypo name="flower" style={{color: Color.red,marginRight: 10}} size={15}/>
                            <Text>4折优惠</Text>
                          </Row>
                        <Right>
                            <Row  style={{borderRadius:10,backgroundColor:Color.orange,height:30,marginRight:30}}>
                                <Text style={[gStyles.textCEolor,{width:100,textAlign:'center',lineHeight:30}]}>HK$188.00</Text>
                            </Row>
                         </Right>
                    </Item>

                    <Item style={[{backgroundColor:Color.white,height:45}]}>
                        <Row verticalCenter style={{paddingLeft: 30}}>
                            <Text>2000</Text>
                            <Entypo name="flower" style={{color: Color.red,marginRight: 10}} size={15}/>
                            <Text>4折优惠</Text>
                        </Row>
                        <Right>
                            <Row  style={{borderRadius:10,backgroundColor:Color.orange,height:30,marginRight:30}}>
                                <Text style={[gStyles.textCEolor,{width:100,textAlign:'center',lineHeight:30}]}>HK$178.00</Text>
                            </Row>

                        </Right>
                    </Item>
                    <Item style={[{backgroundColor:Color.white,height:45}]}>
                        <Row verticalCenter style={{paddingLeft: 30}}>
                            <Text>1000</Text>
                            <Entypo name="flower" style={{color: Color.red,marginRight: 10}} size={15}/>

                        </Row>
                        <Right>
                            <Row  style={{borderRadius:10,backgroundColor:Color.orange,height:30,marginRight:30}}>
                                <Text style={[gStyles.textCEolor,{width:100,textAlign:'center',lineHeight:30}]}>HK$15.00</Text>
                            </Row>
                        </Right>
                    </Item>

                    <Item style={[styles.bottmW,{height:50,alignItems: 'center',justifyContent: 'center',marginTop:20, marginBottom : 20}]}>
                         <Text>赠送免费豆豆</Text>
                    </Item>

                    <Item style={[{backgroundColor:Color.white,height:45}]}>
                        <Row verticalCenter style={{paddingLeft: 30}}>
                            <Text>100</Text>
                            <Entypo name="flower" style={{color: Color.red,marginRight: 5}} size={15}/>
                        </Row>
                        <Right>
                            <Row  style={{borderRadius:10,backgroundColor:Color.blue,height:30,marginRight:30}}>
                                <Text style={[gStyles.textCEolor,{width:100,textAlign:'center',lineHeight:30}]}>照片实验室</Text>
                            </Row>
                        </Right>
                    </Item>
                    <Item style={[{backgroundColor:Color.white,height:45}]}>
                        <Row verticalCenter style={{paddingLeft: 30}}>
                            <Text>100</Text>
                            <Entypo name="flower" style={{color: Color.red,marginRight: 10}} size={15}/>

                        </Row>
                        <Right>
                            <Row  style={{borderRadius:10,backgroundColor:Color.blue,height:30,marginRight:30}}>
                                <Text style={[gStyles.textCEolor,{width:100,textAlign:'center',lineHeight:30}]}>邀请</Text>
                            </Row>
                        </Right>
                    </Item>
                    <Item style={[{backgroundColor:Color.white,height:45}]}>
                        <Row verticalCenter style={{paddingLeft: 30}}>
                            <Text>100</Text>
                            <Entypo name="flower" style={{color: Color.red,marginRight: 5}} size={15}/>
                        </Row>
                        <Right>
                            <Row  style={{borderRadius:10,backgroundColor:Color.blue,height:30,marginRight:30}}>
                                <Text style={[gStyles.textCEolor,{width:100,textAlign:'center',lineHeight:30}]}>邀请</Text>
                            </Row>
                        </Right>
                    </Item>
                    <Item style={[{backgroundColor:Color.white,height:45}]}>
                        <Row verticalCenter style={{paddingLeft: 30}}>
                            <Text>200</Text>
                            <Entypo name="flower" style={{color: Color.red,marginRight: 10}} size={15}/>

                        </Row>
                        <Right>
                            <Row  style={{borderRadius:10,backgroundColor:Color.blue,height:30,marginRight:30}}>
                                <Text style={[gStyles.textCEolor,{width:100,textAlign:'center',lineHeight:30}]}>邀请</Text>
                            </Row>
                        </Right>
                    </Item>
                    <Item style={[{backgroundColor:Color.white,height:45}]}>
                        <Row verticalCenter style={{paddingLeft: 30}}>
                            <Text>500</Text>
                            <Entypo name="flower" style={{color: Color.red,marginRight: 5}} size={15}/>
                            <Text>每加入一位朋友</Text>
                        </Row>
                        <Right>
                            <Row  style={{borderRadius:10,backgroundColor:Color.blue,height:30,marginRight:30}}>
                                <Text style={[gStyles.textCEolor,{width:100,textAlign:'center',lineHeight:30}]}>邀请</Text>
                            </Row>
                        </Right>
                    </Item>

                </Content>
            </Container>
        );
    }
}


