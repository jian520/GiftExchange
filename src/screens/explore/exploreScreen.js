/**
  * desc：
  * author：
  * date： 
  */
import React, {PureComponent} from 'react';
import {
    StyleSheet, TextInput, View,

} from 'react-native';
import {
    Body,
    Button,
    Container,
    Content,
    Header, Input, Item,
    Left,
    List,
    ListItem,
    Right,
    Text,
    Thumbnail,
    Title
} from "native-base";
import gStyles from "../../common/globalStyles";
import Color from "../../commonComponents/Color";

import styles from "../explore/styles";
import common from "../../common/common";

import Entypo from "react-native-vector-icons/Entypo";
import Row from "../../commonComponents/Row";
import {marginTB, paddingLR} from "../../commonComponents/CommonUtil";

export default class exploreScreen extends PureComponent {

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
            <Container style={styles.container}>
                <Header style={{backgroundColor:Color.pickBackground}}>
                    <Left />
                    <Body>
                    <Title style={gStyles.textCEolor}>放禮物</Title>
                    </Body>
                    <Right>
                        <Title style={gStyles.textCEolor}>提交</Title>
                    </Right>
                </Header>

                <Content  style={{backgroundColor:Color.pickBackground}}>
                    <List style={{height:100}} >
                        <ListItem  avatar>
                            <Left>
                                <Thumbnail source={{uri:'https://oss.zuimeimami.com/avatar/doctor_fC14530706150363566e0dce962bb/1520556522703.jpg'}}
                                           style={styles.avatastyle}/>
                            </Left>
                            <Body style={styles.bottmW}>

                            <Text style={{color:Color.white}}>Jow Wong</Text>
                            </Body>
                         </ListItem>
                    </List>

                    <Item style={styles.regSetp}>

                        <Text style={{color: Color.pickBackground, marginLeft: 15,fontWeight: 'bold'}}>禮物選項</Text>

                        <Right>
                            <Text style={ {paddingRight: 15,color: Color.pickBackground}}>{this.state.birthday}</Text>
                        </Right>
                    </Item>

                        <TextInput
                            style={ styles.inputStyle}
                            selectionColor={Color.white} //光标颜色
                            secureTextEntry={false}
                            multiline={true}
                            autoFocus={false} //自动获得焦点
                            underlineColorAndroid='transparent'// Android下划线的颜色
                            placeholder={'禮物想表達什麽'}
                            placeholderTextColor={Color.pickBackground} //设置提示文字的颜色
                            value={this.state.text}

                            onChangeText={this._onChang}/>
                    <Row style={{...marginTB(30,30),marginLeft:22}}>
                        <Entypo name='image' size={35} />
                        <Item style={styles.pickImg}>

                            <Entypo name='circle-with-plus' size={20} style={{...paddingLR(10,5),top:2}}/>
                            <Text style={{color: Color.pickBackground, marginLeft:5,fontWeight: 'bold'}}>添加禮物照片</Text>

                            <Right>
                                <Text style={ {paddingRight: 15,color: Color.pickBackground}}>{this.state.birthday}</Text>
                            </Right>
                        </Item>
                    </Row>

                    <TextInput
                        style={ styles.inputStyle}
                        selectionColor={Color.white} //光标颜色
                        secureTextEntry={false}
                        multiline={true}
                        autoFocus={false} //自动获得焦点
                        underlineColorAndroid='transparent'// Android下划线的颜色
                        placeholder={'我想找'}
                        placeholderTextColor={Color.pickBackground} //设置提示文字的颜色
                        value={this.state.text}

                        onChangeText={this._onChang}/>
                    <Row style={{...marginTB(30,30),marginLeft:22}}>
                        <Entypo name='instagram' size={35} />
                        <Item style={styles.pickImg}>

                            <Entypo name='circle-with-plus' size={20} style={{...paddingLR(10,5),top:2}}/>
                            <Text style={{color: Color.pickBackground, marginLeft:5,fontWeight: 'bold'}}>添加个人照片</Text>

                            <Right>
                                <Text style={ {paddingRight: 15,color: Color.pickBackground}}>{this.state.birthday}</Text>
                            </Right>
                        </Item>
                    </Row>
                </Content>
            </Container>
        );
    }
}



