

import React, {PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native';
import PropTypes from 'prop-types'

import Color from "./Color";
import {Button, Content} from "native-base";
import Column from "./Column";
import {wh} from "./CommonUtil";



export default class PushButton extends PureComponent {


    static propTypes = {
        btnTitle:PropTypes.string,
        onClick:PropTypes.func //接收数据
    };



    render() {
         return (
                 <Column style={{marginTop:50 }}>
                    <Button  style={{alignSelf:"center",backgroundColor:Color.carColor,height:60,borderRadius:30,width:60}} onPress={this.props.onClick}>
                        {/*<Image source={require('Images/icon_arrow_right_white.png')} style={{...wh(20)}}/>*/}

                    </Button>
                </Column>


        );
    }
}
