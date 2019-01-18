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
            isLogin: true,

        }
        StatusBar.setBarStyle('light-content')
    }


    componentWillMount() {


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
        // service.getUserFromCache()
        //     .then((user) => {
        //
        //         if (user.id == 0) {
        //             this.setState({
        //                 isLogin: false
        //             });
        //
        //         } else {
        //             this.setState({
        //                 isLogin: true
        //             });
        //
        //         }
        //     });


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
