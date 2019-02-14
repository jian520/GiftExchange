/**
  * desc：
  * author：
  * date： 
  */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import {
    Container,
     Thumbnail
} from "native-base";
import BaseImg from "../../commonComponents/BaseImg";
import {screenH, screenW} from "../../commonComponents/CommonUtil";
import {NavigationActions} from "react-navigation";
export default class completeScreen extends Component {

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

    popHome(){
         this.props.navigation.reset([NavigationActions.navigate({routeName: 'App'})], 0);
    }


    render() {
        return (
            <Container >
                <TouchableOpacity   onPress={()=>this.popHome()}>
                <ImageBackground style={{
                    width: screenW,
                    height: screenH,
                 }}
                 source={BaseImg.StartImg.bgImg}
                />
                </TouchableOpacity>
            </Container>
        );
    }
}

const styles = StyleSheet.create({});

