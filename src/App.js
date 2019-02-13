import React, {PureComponent, PropTypes} from 'react';
import {StatusBar, DeviceEventEmitter,NetInfo} from 'react-native';

import {Root,Toast} from "native-base";
import {
    createStackNavigator,
    createSwitchNavigator,
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StartScreen from "./screens/start/";
import LoginScreen from "./screens/login/LoginScreen"
import RegScreen from "./screens/reg/regSetpA"
import HomeScreen from "./screens/home/HomeScreen";
import ExploreScreen from "./screens/explore/exploreScreen";
import MessageScreen from  "./screens/Message/messageScreens"
import StartA from "./screens/start/StartA";
import StartB from "./screens/start/StartB";
import StartC from "./screens/start/StartC";
import StartD from "./screens/start/StartD";
import WelcomeHome from './screens/start/WelcomeHome';
import Entypo from 'react-native-vector-icons/Entypo';
import MeScreen from './screens/me/MeScreen'
import SettingScreen from './screens/setting'
import RegSetp from './screens/reg/regSetpB'
import EditprofileScreen from "./screens/me/EditprofileScreen";
import PersonalScreen from "./screens/me/PersonalScreen";
import completeScreen from "./screens/reg/completeScreen";
import ShoppingScreen from "./screens/home/ShoppingScreen";
import HelpScreen from "./screens/me/HelpScreen";
import TestScreen from "./screens/home/TestScreen";
import SettingView from './screens/setting/SettingScreen'
 

import common from "./common/common";
import WebIM from './Lib/WebIM'
import StorageUtil from "./common/Storage";
 

const HomeTab = createStackNavigator({
        Home: {
            screen: HomeScreen,
            headerMode: "none"
        },
    },
    {
        initialRouteName: "Home",
        headerMode: "none"
    }
);


const MeTab = createStackNavigator({
        Me: {
            screen: MeScreen,
            headerMode: "none"
        },
    }, {
        initialRouteName: "Me",
    
        headerMode: "none"
    }
);


const Tabs = createBottomTabNavigator(
    {
        HomeTab: {
            screen: HomeTab,
            navigationOptions: {

                tabBarLabel: 'Bagel',

                tabBarIcon: ({tintColor, focused}) => (
                    <FontAwesome
                        name={focused ? 'gittip' : 'gittip'}
                        size={26}
                        style={{color: tintColor}}
                    />
                ),
            },
        },

        ExploreTab: {
            screen: TestScreen,
            navigationOptions: {

                tabBarLabel: '探索',
                tabBarIcon: ({tintColor, focused}) => (
                    <FontAwesome
                        name={focused ? 'search' : 'search'}
                        size={26}
                        style={{color: tintColor}}
                    />
                ),
            },
        },
        MessageTab: {
            screen: MessageScreen,
            navigationOptions: {

                tabBarLabel: 'Inbox',
                tabBarIcon: ({tintColor, focused}) => (
                    <FontAwesome
                        name={focused ? 'comments' : 'comments'}
                        size={26}
                        style={{color: tintColor}}
                    />
                ),
            },
        },

        MeTab: {
            screen: MeTab,
            navigationOptions: {

                tabBarLabel: '我',
                tabBarIcon: ({tintColor, focused}) => (

                    <Entypo
                name={'user'}
                size={26}
                style={{color: tintColor}}
                    />
                ),
            },
        },


    },
    {
        tabBarOptions: {
            showLabel: true,
        },
    }
);


const AppStack = createStackNavigator({
        Tabs: {
            screen: Tabs,
        },
        WelcomeHome: {screen: WelcomeHome},
        Setting: {screen: SettingScreen},
        Profile: {screen: MeScreen},
        Editprofile:{screen:EditprofileScreen},
        Personal:{screen:PersonalScreen},
        ShoppingScreen:{screen:ShoppingScreen},
        HelpScreen:{screen:HelpScreen},
        ExploreScreen:{screen:ExploreScreen},
        SettingScreen:{screen:SettingView}
    },
    {
        headerMode: "none"
    }
);


const StartStack = createStackNavigator({
        Start: {screen: StartScreen},
        StartA: {screen: StartA},
        StartB: {screen: StartB},
        StartC: {screen: StartC},
        StartD: {screen: StartD},
        WelcomeHome: {screen: WelcomeHome},
        Login: {screen: LoginScreen},
        Reg: {screen: RegScreen},
        RegB:{screen:RegSetp},
        completeS:{screen:completeScreen},
        App: {screen: AppStack},
    },
    {
        initialRouteName: "Start",
        headerMode: "none",
        navigationOptions: {
            header: null
        },

    }
);


const AppContainer = createAppContainer(createSwitchNavigator(
    {

        App: AppStack,
        Start: StartStack,
    },
    {
        initialRouteName: 'App',
    }
));
export const StartContainer = createAppContainer(createSwitchNavigator(
    {
        Start: StartStack,
        App: AppStack,

    },
    {
        initialRouteName: 'Start',
    }
));

export class StartAndTabRoot extends PureComponent {


    constructor() {
        super()
        this.state = {
            isLogin: false,
        }
        StatusBar.setBarStyle('light-content')
    }

    componentWillMount() {
        StorageUtil.get('hasLogin', (error, object) => {
            if (!error && object != null && object.hasLogin) {
                // if (this._isMount) {
                this.setState({isLogin: object.hasLogin});
                // }
                // 已登录，直接登录聊天服务器
                common.toast('自动登录中...');
                this.autoLogin();
            } else {
                common.toast('未登录');
            }
        });

        NetInfo.isConnected.addEventListener(
            'connectionChange',
            this.handleFirstConnectivityChange
        );
    }

    handleFirstConnectivityChange(isConnected) {
        if (!isConnected) {
            Toast.show({
                text: "网络未连接",
                position: "top"
            });

        }
    }

    componentDidMount() {


        DeviceEventEmitter.addListener('jian', (value) => {
            //这里面是要调用的方法，比如：刷新
            //value:是下面页面在 通知 时 ，所传递过来的参数


            console.log(value)

            this.setState({
                isLogin: true,
            });
            this.setState({isLogin: false}, () => {
                this.forceUpdate();
            });
        });
    }
    autoLogin() {
        StorageUtil.get('username', (error, object) => {
            if (!error && object && object.username) {
                let username = object.username;
                console.log("object" + object.username)
                let password = '';
                StorageUtil.get('password', (error, object) => {
                    if (!error && object && object.password) {
                        password = object.password;
                        // 只有在自动登录时才注册环信的监听器
                        this.registerHXListener();
                        this.loginToHX(username, password);
                    } else {
                        common.toast('数据异常');
                    }
                });
            } else {
                common.toast('数据异常');
            }
        });
    }

    loginToHX(username, password) {
        this.isAutoLogin = true;
        if (WebIM.conn.isOpened()) {
            WebIM.conn.close('logout');
        }
        WebIM.conn.open({
            apiUrl: WebIM.config.apiURL,
            user: username,
            pwd: password,
            appKey: WebIM.config.appkey
        });
    }


    registerHXListener() {  // 注册环信的消息监听器，只有在自动登录时才注册
        WebIM.conn.listen({
            // xmpp连接成功
            onOpened: (msg) => {
                // 登录环信服务器成功后回调这里，关闭当前页面并跳转到HomeScreen
                this.props.navigation.reset([NavigationActions.navigate({routeName: 'App'})], 0);
            },
            // 各种异常
            onError: (error) => {
                common.toast('登录聊天服务器出错');
                console.log('onError: ' + JSON.stringify(error))
            },
            // 连接断开
            onClosed: (msg) => {
                // Toast.showShortCenter('与聊天服务器连接断开');
            },
        });
    }


    componentWillUnmount() {
        // 移除
    DeviceEventEmitter.remove();
        NetInfo.isConnected.removeEventListener(
            'connectionChange',
            this.handleFirstConnectivityChange
        );
    }
 
    render() {
        if (this.state.isLogin) {
            return (
                <AppContainer/>
            );
        }
        return (
            <StartContainer/>
        );
    }
}

export default () =>

    <Root>
        <StartAndTabRoot/>
    </Root>;
