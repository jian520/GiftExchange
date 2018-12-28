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

import HomeScreen from "./screens/home/HomeScreen";
import TestScreen from "./screens/home/TestScreen";
import StartA from "./screens/start/StartA";
import StartB from "./screens/start/StartB";
import StartC from "./screens/start/StartC";
import StartD from "./screens/start/StartD";
import MeScreen from './screens/me/MeScreen'


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

                tabBarLabel: 'Home',
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

                tabBarLabel: 'Me',
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

        Test: {screen: TestScreen},
        Profile: {screen: MeScreen},
        StartA: {screen: StartA},
        StartB:{screen:StartB},
        StartC:{screen:StartC},
        StartD:{screen:StartD}
    },
    {

        headerMode: "none"

    }
);


const StartStack = createStackNavigator({
        Start: {screen: StartScreen},

        App: {screen: AppStack},
    },
    {
        initialRouteName: "Start",
        headerMode: "none",
        navigationOptions:{
            header:null
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
const StartContainer = createAppContainer(createSwitchNavigator(
    {
        Start: StartStack,
        App: AppStack,

    },
    {
        initialRouteName: 'Start',
    }
));


class StartAndTabRoot extends PureComponent {
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




        DeviceEventEmitter.addListener('jian', (value)=>{
            //这里面是要调用的方法，比如：刷新
            //value:是下面页面在 通知 时 ，所传递过来的参数


            console.log(value)

            this.setState({
                isLogin: false,
            });
            this.setState({  isLogin: false },()=>{
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
