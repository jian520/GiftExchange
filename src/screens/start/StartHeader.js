

import React, {PureComponent} from 'react';
import {
    StyleSheet,
    Text,

} from 'react-native';
import PropTypes from 'prop-types'
import Column from "../../commonComponents/Column";

import {px2sp,marginTB} from "../../commonComponents/CommonUtil";
import Color from "../../commonComponents/Color";

/**
 * 开始页面Header
 *
 */

export default class StartHeader extends PureComponent {


    static propTypes = {
        titltA:PropTypes.string,
        titltB:PropTypes.string
    };
    render() {

        const style ={
            marginTop:px2sp(180),
            alignItems: "center",

        };
        const textStyle ={
            color:Color.white,
            fontSize:px2sp(35),
             ...marginTB(5,5),
        };


        return (
            <Column style={StyleSheet.flatten([style,this.props.style])}>
                <Text style={textStyle}>{this.props.titltA}</Text>
                <Text style={textStyle}>{this.props.titltB}</Text>
            </Column>
        );
    }
}
