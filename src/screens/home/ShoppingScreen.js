/**
  * desc：
  * author：
  * date： 
  */
import React, {Component} from 'react';

import {Body, Button, Container, Content, Header, Icon, Item, Right, Text, Title,H3,Left,View} from "native-base";
import styles from "../home/styles";
import gStyles from "../../common/globalStyles";
import Color from "../../commonComponents/Color";
import Entypo from "react-native-vector-icons/Entypo";
import Row from "../../commonComponents/Row";
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
} from 'react-native-popup-dialog';
import Column from "../../commonComponents/Column";
import common from "../../common/common";
import ShareUtile from "../../native/ShareUtil";




export default class ShoppingScreen  extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slideAnimationDialog: false,
        }

    }



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

    shareboard(){
        var list = [0,1,2,3,4]
        ShareUtile.shareboard('sssss','http://dev.umeng.com/images/tab2_1.png','http://www.umeng.com/','title',list,(code,message) =>{
            this.setState({result:message});

        });
    }


    showSlideAnimationDialog() {
        this.setState({
            slideAnimationDialog: true,
        });
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
                    <Title style={gStyles.textAColor}>商店</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    <Button block onPress={()=>{this.showSlideAnimationDialog()}} style={styles.shoppingBtn}>
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

                    <Item style={[{backgroundColor:Color.white,height:45}]} onPress={()=>this.shareboard()}>
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
                    <Item style={[{backgroundColor:Color.white,height:45}]} onPress={()=>this.shareboard()}>
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
                    <Item style={[{backgroundColor:Color.white,height:45}]} onPress={()=>this.shareboard()}>
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
                    <Item style={[{backgroundColor:Color.white,height:45}]} onPress={()=>this.shareboard()}>
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
                    <Item style={[{backgroundColor:Color.white,height:45}]} onPress={()=>this.shareboard()}>
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
                        <Column style={{height:350,backgroundColor:Color.white}}>
                           <Column  style={{margin:20}}>
                                <Text style={gStyles.textCColor}>選擇下列的月費計劃，</Text>
                                <Text style={[gStyles.textCColor,{marginLeft:10}]}>即可獲得高級功能</Text>
                            </Column>

                            <Button block  style={{backgroundColor: common.colorC,marginTop:20}}  >
                                <Column>
                                    <Text style={gStyles.textBColor}>6個月/HK$938</Text>
                                    <Text style={[gStyles.textCEolor,{marginLeft:10} ]}>HK$938/月</Text>
                                </Column>
                            </Button>
                            <Button block  style={{backgroundColor: common.colorC,marginTop:20}}  >
                                <Column>
                                    <Text style={gStyles.textBColor}>3個月/HK$588</Text>
                                    <Text style={[gStyles.textCEolor,{marginLeft:10} ]}>HK$196/月</Text>
                                </Column>
                            </Button>
                            <Button block  style={{backgroundColor: common.colorC,marginTop:20}} >
                               <Text style={gStyles.textBColor}>1個月/HK$2718</Text>
                             </Button>

                            <Button block  warning style={{marginTop:30,height:30}} onPress={() => { this.setState({
                                slideAnimationDialog: false,
                            })}}>
                                  <Text style={gStyles.textCEolor}>立即訂閱</Text>
                             </Button>

                            <Button block  style={{backgroundColor:Color.white}} onPress={() => { this.setState({
                                slideAnimationDialog: false,
                            })}}>
                                <Text style={gStyles.textBColor}>現在不要</Text>
                            </Button>

                        </Column>
                     </DialogContent>
                </Dialog>
            </Container>
        );
    }
}


