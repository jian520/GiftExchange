import React, {PureComponent, PropTypes} from 'react';
import {StatusBar, DeviceEventEmitter} from 'react-native';

import {Root} from "native-base";
import {
    createStackNavigator,
    createSwitchNavigator,
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation'


import Ionicons from 'react-native-vector-icons/Ionicons';


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

import MeScreen from './screens/me/MeScreen'
import SettingScreen from './screens/setting'
import RegSetp from './screens/reg/regSetpB'

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

    },

    {
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
                    <Ionicons
                        name={focused ? 'ios-home' : 'ios-home'}
                        size={26}
                        style={{color: tintColor}}
                    />
                ),
            },
        },

        ExploreTab: {
            screen: ExploreScreen,
            navigationOptions: {

                tabBarLabel: '探索',
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={focused ? 'ios-home' : 'ios-home'}
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
                    <Ionicons
                        name={focused ? 'ios-home' : 'ios-home'}
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
                    <Ionicons
                        name={focused ? 'ios-home' : 'ios-home'}
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
                isLogin: false,
            });
            this.setState({isLogin: false}, () => {
                this.forceUpdate();
            });


        });


    }


    componentWillUnmount() {
        // 移除


        DeviceEventEmitter.remove();

    }

    componentWillMount() {
        // this.subscription = DeviceEventEmitter.addListener('DidLogin', (value) => {
        //     console.log("DidLogin")
        //     console.log(value)
        //
        //     this.setState({
        //         isLogin: value
        //     });
        //
        //
        // })

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
