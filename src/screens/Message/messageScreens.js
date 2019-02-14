/**
  * desc：
  * author：
  * date： 
  */
import React, {PureComponent} from 'react';
import { Image } from 'react-native';
import gStyles from "../../common/globalStyles";
import WebIM from '../../Lib/WebIM'

import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon ,Title,Right} from 'native-base';
import ConversationUtil from "../../common/ConversationUtil";
import UserInfoUtil from "../../common/UserInfoUtil";
import common from "../../common/common";
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
        this.state = {
            recentConversation: []
        }
          this.registerHXListener();
    }

    static propTypes = {}

    loadConversations(username) {
        ConversationUtil.getConversations(username, (result) => {
            let count = result.length;
            let index = 0;
            for (let i = 0; i < count; i++) {
                let conversation = result[i];
                let chatWithUsername = conversation.conversationId.replace(username, '');
                UserInfoUtil.getUserInfo(chatWithUsername, (userInfo) => {
                    index++;
                    if (userInfo != null) {
                        conversation['avatar'] = userInfo.avatar;
                        conversation['nick'] = userInfo.nick;
                    }
                    if (index == count) {
                        this.setState({recentConversation: result});
                        ConversationUtil.showConversations();
                    }
                });
            }
        });
    }

    registerHXListener() {  // 注册环信的消息监听器

        WebIM.conn.listen({
            // xmpp连接成功
            onOpened: (msg) => {
                console.log('xmpp连接成功')

               common.toast('onOpend')
                // 登录环信服务器成功后回调这里
                // 出席后才能接受推送消息
                WebIM.conn.setPresence();
            },
            // 出席消息
            onPresence: (msg) => {
            },

            // 各种异常
            onError: (error) => {
                common.toast('登录聊天服务器出错');
                console.log('onError: ' + JSON.stringify(error));
            },
            // 连接断开
            onClosed: (msg) => {
                common.toast('与聊天服务器连接断开');
            },
            // 更新黑名单
            onBlacklistUpdate: (list) => {
            },
            // 文本消息
            onTextMessage: (message) => {
                message.conversationId = ConversationUtil.generateConversationId(message.from, message.to);
                message.msgType = 'txt';
                message.time = TimeUtil.currentTime();
                ConversationUtil.addMessage(message, (error) => {
                    // 重新加载会话
                    this.loadConversations(this.state.username);
                    // 若当前在聊天界面，还要通知聊天界面刷新
                    CountEmitter.emit('notifyChattingRefresh');
                });
            },
            onPictureMessage: (message) => {
                message.conversationId = ConversationUtil.generateConversationId(message.from, message.to);
                message.msgType = 'img';
                message.time = TimeUtil.currentTime();
                ConversationUtil.addMessage(message, (error) => {
                    // 重新加载会话
                    this.loadConversations(this.state.username);
                    // 若当前在聊天界面，还要通知聊天界面刷新
                   // CountEmitter.emit('notifyChattingRefresh');
                });
            }
        });
    }

    componentWillMount() {
        // CountEmitter.addListener('notifyConversationListRefresh', () => {
        //     // 重新加载会话
        //     this.loadConversations(this.state.username);
        // });
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
                {/*<View>*/}
                    {/*<DeckSwiper*/}
                        {/*dataSource={cards}*/}
                        {/*renderItem={item =>*/}
                            {/*<Card style={{ elevation: 3 }}>*/}
                                {/*<CardItem>*/}
                                    {/*<Left>*/}
                                        {/*<Thumbnail source={item.image} />*/}
                                        {/*<Body>*/}
                                        {/*<Text>{item.text}</Text>*/}
                                        {/*<Text note>NativeBase</Text>*/}
                                        {/*</Body>*/}
                                    {/*</Left>*/}
                                {/*</CardItem>*/}
                                {/*<CardItem cardBody>*/}
                                    {/*<Image style={{ height: 300, flex: 1 }} source={item.image} />*/}
                                {/*</CardItem>*/}
                                {/*<CardItem>*/}
                                    {/*<Text>我们处理手势可以使用GestureDetector组件，它是可以添加手势的一个widget，观察它的源码我们处理手势可以使用GestureDetector组件，它是可以添加手势的一个widget，观察它的源码</Text>*/}


                                {/*</CardItem>*/}
                                {/*<CardItem>*/}
                                    {/*<Icon name="heart" style={{ color: '#ED4A6A' }} />*/}
                                    {/*<Text>{item.name}</Text>*/}
                                {/*</CardItem>*/}


                            {/*</Card>*/}
                        {/*}*/}
                    {/*/>*/}
                {/*</View>*/}
            </Container>
        );
    }
}



