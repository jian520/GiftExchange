import React, {Component} from 'react';
import NavigationUtil from "../navigator/NavigationUtil";
import SplashScreen from 'react-native-splash-screen'




export default class WelcomePage extends Component {
    componentDidMount() {
        // this.props.onThemeInit();
        this.timer = setTimeout(() => {
            SplashScreen.hide();
            NavigationUtil.resetToHomPage({
                navigation: this.props.navigation
            })
        }, 200);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return null;
    }
}
