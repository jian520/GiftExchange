

import React, {PureComponent} from 'react';
import {
       Image,
} from 'react-native';
import PropTypes from 'prop-types'

import Color from "./Color";
import {Button, Content} from "native-base";
import Column from "./Column";
import {wh} from "./CommonUtil";
import BaseImg from "./BaseImg";


//圆形BUTTON
export default class PushButton extends PureComponent {


    static propTypes = {
        btnTitle:PropTypes.string,
        onClick:PropTypes.func //接收数据
    };



    render() {
         return (
                 <Column style={{marginTop:50 }}>
                    <Button  style={{alignSelf:"center",backgroundColor:Color.carColor,height:60,borderRadius:30,width:60}} onPress={this.props.onClick}>
                        <Image style={{
                            ...wh(30, 30),
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 22,
                          }}
                          source={BaseImg.StartImg.arrowRight}/>

                    </Button>
                </Column>


        );
    }
}
