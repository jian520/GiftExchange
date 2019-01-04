import React, {PureComponent} from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import PropTypes from 'prop-types'


import {px2sp, px2dp, marginTB, paddingTB} from "../../commonComponents/CommonUtil";
import Color from "../../commonComponents/Color";
import {Card, H3} from "native-base";
import styles from "./styles";
import Divider from "../../commonComponents/Divider";

/**
 * 开始中间
 *
 */

export default class StartContentView extends PureComponent {

    static propTypes = {
        ...TextInput.propTypes,
        id: PropTypes.func,
        label: PropTypes.string,
        selectionColor: PropTypes.string,
        secureTextEntry: PropTypes.bool,
        keyboardType: PropTypes.oneOf([
            'default', 'numeric', 'email-address',
            "ascii-capable", 'numbers-and-punctuation',
            'url', 'number-pad', 'phone-pad',
            'name-phone-pad', 'decimal-pad',
            'twitter', 'web-search']),
        placeholder: PropTypes.string,
        placeholderTextColor: PropTypes.string,
        value: PropTypes.string,
        onFocus: PropTypes.func,
        onEndEditing: PropTypes.func,
        onChangeText: PropTypes.func, //接收数据
        numberOfLines: PropTypes.number,
        titleA: PropTypes.string,
    }

    static defaultProps = {
        ...TextInput.defaultProps,
        selectionColor: Color.theme,
        secureTextEntry: false,
        keyboardType: 'default',
        placeholder: null,
        placeholderTextColor: Color.white,
        value: null,
        numberOfLines: 1
    };


    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            text: this.props.value
        };
    }

    _onChang = (text) => {
        this.setState({text});
        this.props.onChangeText(text)
    }


    render() {

        const style = {
            flex: 0,
            marginTop: 50,
            backgroundColor: Color.carColor,
            borderRadius: px2sp(20)

        };
        const titleStyle = {
            color: Color.white,
            fontSize: px2sp(35),
            textAlign: 'center',
            ...marginTB(5, 5),
        };
        const inputStyle = {

            fontSize: px2sp(28),
            color: Color.black,
            height: 150,
            padding: 15,


        };

        return (
            <Card style={style}>
                <View style={{padding: 15}}>
                    <H3 style={titleStyle}>{this.props.titleA}</H3>
                </View>

                <Divider style={{height: px2dp(1), backgroundColor: Color.background}}/>
                <View style={{marginTop: 15}}>
                    <TextInput
                        ref={this.props.id}
                        style={StyleSheet.flatten([inputStyle, this.props.style])}
                        selectionColor={this.props.selectionColor} //光标颜色
                        secureTextEntry={this.props.secureTextEntry}
                        keyboardType={this.props.keyboardType}
                        multiline={true}
                        numberOfLines={this.props.numberOfLines}//指定行数 multiline={true}//准许多行
                        autoFocus={false} //自动获得焦点
                        underlineColorAndroid='transparent'// Android下划线的颜色
                        placeholder={this.props.placeholder}
                        placeholderTextColor={this.props.placeholderTextColor} //设置提示文字的颜色
                        value={this.state.text}

                        onChangeText={this._onChang}/>
                </View>
            </Card>
        );
    }


}
