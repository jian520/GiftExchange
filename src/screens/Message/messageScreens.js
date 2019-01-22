/**
  * desc：
  * author：
  * date： 
  */
import React, {PureComponent} from 'react';
import { Image } from 'react-native';
import gStyles from "../../common/globalStyles";


import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon ,Title,Right} from 'native-base';
const cards = [
    {
        text: 'Card One',
        name: 'One',
        image: require('../../img/swiper-1.png'),
    },
    {
        text: 'Card One',
        name: 'One',
        image: require('../../img/swiper-2.png'),
    }
];

export default class messageScreens extends PureComponent {

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
            <Container style={gStyles.container}>
                <Header>
                    <Left />
                    <Body>
                    <Title style={gStyles.textCColor}>Fate Date</Title>
                    </Body>
                    <Right/>
                </Header>
                <View>
                    <DeckSwiper
                        dataSource={cards}
                        renderItem={item =>
                            <Card style={{ elevation: 3 }}>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={item.image} />
                                        <Body>
                                        <Text>{item.text}</Text>
                                        <Text note>NativeBase</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image style={{ height: 300, flex: 1 }} source={item.image} />
                                </CardItem>
                                <CardItem>
                                    <Text>我们处理手势可以使用GestureDetector组件，它是可以添加手势的一个widget，观察它的源码我们处理手势可以使用GestureDetector组件，它是可以添加手势的一个widget，观察它的源码</Text>


                                </CardItem>
                                <CardItem>
                                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                                    <Text>{item.name}</Text>
                                </CardItem>


                            </Card>
                        }
                    />
                </View>
            </Container>
        );
    }
}



