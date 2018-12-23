import React, {PureComponent, PropTypes} from 'react';
import {StatusBar, DeviceEventEmitter} from 'react-native';

import {Root} from "native-base";
import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation'


import Ionicons from 'react-native-vector-icons/Ionicons';


import StartScreen from "./screens/start/";



import HomeScreen from "./screens/home/HomeScreen";
import TestScreen from "./screens/home/TestScreen";

import MeScreen from './screens/me/MeScreen'








// create a component
export class MainRoot extends PureComponent {
    constructor() {
        super()

        StatusBar.setBarStyle('light-content')
    }

    componentDidMount() {
        //    SplashScreen.hide()

    }

    render() {
        return (
            <Main/>
        );
    }
}





export class StartRoot extends PureComponent {


    render() {



        return (
            <Start/>
        );
    }
}





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

const MainNavigator = createStackNavigator({
        Tabs: {
            screen: Tabs,
        },

        Test: {screen: TestScreen},
        Profile: {screen: MeScreen},

    },
    {

        headerMode: "none"

    }
);




const StartNavigator = createStackNavigator({
        Start: {screen: StartScreen},
        Main: {screen:  MainRoot},
    },
    {
        initialRouteName: "Start",
        headerMode: "none"


    }
);

const Main = createAppContainer(MainNavigator)
const Start = createAppContainer(StartNavigator)






//
// export default App


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

    }
    componentWillUnmount() {
        // 移除
        this.subscription.remove();
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

        if(this.state.isLogin) {
            return (
                <MainRoot />
            );
        }

        return (
            <StartRoot />
        );
    }
}







export default () =>

    <Root>
        <StartAndTabRoot/>
    </Root>;
