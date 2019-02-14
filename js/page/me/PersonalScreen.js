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

import Color from "../../commonComponents/Color";

import Column from "../../commonComponents/Column";
import Row from "../../commonComponents/Row";


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
            <Container style={gStyles.cbg} >
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

                    </Right>
                </Header>

                <Content >
                    <List style={{height:90,backgroundColor:Color.white}}>
                        <ListItem  avatar>
                            <Left>
                                <Thumbnail source={{uri:'https://oss.zuimeimami.com/avatar/doctor_fC14530706150363566e0dce962bb/1520556522703.jpg'}}
                                           style={styles.avatastyle}/>
                            </Left>
                             <Row   verticalCenter style={{marginLeft: 15,marginTop: 10}}>
                                <Text>40,Tuen Mun,New Territories</Text>
                             </Row>
                        </ListItem>
                    </List>

                    <List style={{ backgroundColor:Color.white}}>
                        <ListItem >
                            <Left  >
                                <Column>
                                    <Text style={{ left:-14,fontWeight: 'bold'}}>身高</Text>
                                    <Text style={{ fontWeight: 'bold'}}>160公分</Text>
                                </Column>

                            </Left>
                            <Right  >
                                <Column style={{justifyContent:'flex-end'}}>
                                <Text style={{ fontWeight: 'bold',textAlign:'right'}}>地址</Text>
                                <Text style={{ fontWeight: 'bold',textAlign:'right'}}>香港</Text>
                                </Column>
                            </Right>
                        </ListItem>
                    </List>
                    <List style={{backgroundColor:Color.white}}>
                        <ListItem >
                            <Left  >
                                <Column>
                                <Text style={{ fontWeight: 'bold',left:-8}}>宗教</Text>
                                <Text style={{ fontWeight: 'bold'}}>基督教</Text>
                                </Column>
                            </Left>
                            <Right >
                                <Column style={{justifyContent:'flex-end'}}>
                                <Text style={{ fontWeight: 'bold',textAlign:'right'}}>職業</Text>
                                <Text style={{ fontWeight: 'bold',textAlign:'right'}}>Admin</Text>
                                </Column>
                            </Right>
                        </ListItem>
                    </List>
                    <List style={{backgroundColor:Color.white}}>
                        <ListItem >
                            <Left  >
                                <Column>
                                <Text style={{ fontWeight: 'bold'}}>公司</Text>
                                <Text style={{ fontWeight: 'bold'}}>HK</Text>
                                </Column>
                            </Left>
                            <Right >
                                <Column style={{justifyContent:'flex-end'}}>
                                <Text style={{ fontWeight: 'bold',textAlign:'right'}}>學歷</Text>
                                <Text style={{ fontWeight: 'bold',textAlign:'right'}}>HK/學士</Text>
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

