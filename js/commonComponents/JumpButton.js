import React, {PureComponent} from 'react';

import PropTypes from 'prop-types'


import Color from "./Color";
import {Button,Text} from 'native-base';

///圆角BUTTON
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
            //  borderRadius: 17,
        };
        const textStyle = {
            color: Color.white,
            // textAlign: 'center',
            // lineHeight: 35,
        };


        return (

            <Button block rounded style={style} onPress={this.props.onClick}>
                <Text style={textStyle}>{this.props.btnTitle}</Text>
            </Button>

            // <TouchableOpacity onPress={this.props.onClick}>
            //     <Column style={StyleSheet.flatten([style, this.props.style])}>
            //         <Text style={textStyle}>{this.props.btnTitle}</Text>
            //     </Column>
            // </TouchableOpacity>

        );
    }
}
