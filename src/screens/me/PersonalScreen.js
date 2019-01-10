/**
  * desc：
  * author：
  * date： 
  */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {
    Body,
    Button,
    Container,
    Content,
    Header,
    Icon,
    Left,
    List,
    ListItem,
    Right, Separator, Text,
    Thumbnail,
    Title
} from "native-base";
import gStyles from "../../common/globalStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
import Color from "../../commonComponents/Color";
import {marginTB, paddingTB} from "../../commonComponents/CommonUtil";
import Column from "../../commonComponents/Column";

export default class PersonalScreen  extends Component {

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



    render() {
        return (
            <Container style={gStyles.container} >
                <Header>
                    <Left>
                        <Button transparent onPress={() =>  this.props.navigation.goBack()}>
                            <Icon name="arrow-back" style={{color: "#000"}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={gStyles.textAColor}>個人資料</Title>
                    </Body>
                    <Right>
                        <Title style={gStyles.textAColor}>...</Title>
                        {/*<Ionicons*/}
                            {/*name={'more'}*/}
                            {/*size={26}*/}
                            {/*style={gStyles.textAColor}*/}
                        {/*/>*/}
                    </Right>
                </Header>

                <Content style={{backgroundColor:Color.pickBackground}}>
                    <List style={{height:90}}>
                        <ListItem  avatar>
                            <Left>
                                <Thumbnail source={{uri:'https://oss.zuimeimami.com/avatar/doctor_fC14530706150363566e0dce962bb/1520556522703.jpg'}}
                                           style={styles.avatastyle}/>
                            </Left>
                            <Body style={{top:10}}>
                                <Text style={{color:Color.white}}>40,Tuen Mun,New Territories</Text>
                            </Body>
                        </ListItem>
                    </List>
                    <Separator style={{backgroundColor: Color.white, height: 0.5}}/>
                    <List style={{height:90,top:20}}>
                        <ListItem >
                            <Left style={{left:10}}>
                                <Column>
                                    <Text style={{color:Color.white,left:-12,fontWeight: 'bold'}}>身高</Text>
                                    <Text style={{color:Color.white,fontWeight: 'bold'}}>160公分</Text>
                                </Column>

                            </Left>
                            <Right style={{right:50}}>
                                <Column>
                                <Text style={{color:Color.white,fontWeight: 'bold'}}>地址</Text>
                                <Text style={{color:Color.white,fontWeight: 'bold'}}>香港</Text>
                                </Column>
                            </Right>
                        </ListItem>
                    </List>
                    <List style={{height:90}}>
                        <ListItem >

                            <Left style={{left:10}}>
                                <Column>
                                <Text style={{color:Color.white,fontWeight: 'bold',left:-10}}>宗教</Text>
                                <Text style={{color:Color.white,fontWeight: 'bold'}}>基督教</Text>
                                </Column>
                            </Left>
                            <Right style={{right:30}}>
                                <Column>
                                <Text style={{color:Color.white,fontWeight: 'bold'}}>職業</Text>
                                <Text style={{color:Color.white,fontWeight: 'bold'}}>Admin</Text>
                                </Column>
                            </Right>
                        </ListItem>
                    </List>
                    <List style={{height:90}}>
                        <ListItem >
                            <Left style={{left:10}}>
                                <Column>
                                <Text style={{color:Color.white,fontWeight: 'bold' }}>公司</Text>
                                <Text style={{color:Color.white,fontWeight: 'bold'}}>HK</Text>
                                </Column>
                            </Left>
                            <Right style={{right:15}}>
                                <Column>
                                <Text style={{color:Color.white,fontWeight: 'bold'}}>學歷</Text>
                                <Text style={{color:Color.white,fontWeight: 'bold'}}>HK/學士</Text>
                                </Column>
                            </Right>
                        </ListItem>
                    </List>
               </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({});

