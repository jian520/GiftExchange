import React, {PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types'
import Column from "../../commonComponents/Column";

import {px2sp, marginTB, wh} from "../../commonComponents/CommonUtil";
import Color from "../../commonComponents/Color";

/**
 * 开始页面Header
 *
 */

export default class JumpButton extends PureComponent {


    static propTypes = {
        btnTitle: PropTypes.string,
        onClick: PropTypes.func //接收数据
    };


    render() {

        const style = {
            position: 'absolute',
            bottom: 49,
            backgroundColor: Color.carColor,
            width: 100,
            height: 35,
            marginLeft: 15,
            borderRadius: 17,
        };
        const textStyle = {
            color: Color.white,
            textAlign: 'center',
            lineHeight: 35,
        };


        return (
            <TouchableOpacity onPress={this.props.onClick}>
                <Column style={StyleSheet.flatten([style, this.props.style])}>
                    <Text style={textStyle}>{this.props.btnTitle}</Text>
                </Column>
            </TouchableOpacity>

        );
    }
}
