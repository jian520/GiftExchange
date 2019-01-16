import React, {Component} from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Body,
    Left,
    Right,
    Item,
    View,
    Text,
} from "native-base";

import gStyles from "../../common/globalStyles"

import Picker from 'react-native-picker';
import area from '../../common/area.json';
import styles from "./styles";
import UserParams from '../../model/UserParams'
import Color from "../../commonComponents/Color";
import {marrydatas, education, religious} from '../../common/datas.js';

import EvilIcons from "react-native-vector-icons/EvilIcons";


import {marginLR, marginTB} from "../../commonComponents/CommonUtil";
import Entypo from "react-native-vector-icons/Entypo";
import Row from "../../commonComponents/Row";

var userParams = Object.create(UserParams);
export default class RegSetpB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            sex: '請選擇性別',
            birthday: null,
            marriage: '請選擇職業',
            education: '請選擇學歷',
            height: '請選擇身高',
            area: '請選擇國家/地址',
            religious: '請選擇宗教'
        };
    }

    _createDateData() {
        let date = [];
        for (let i = 1970; i < 2020; i++) {
            let month = [];
            for (let j = 1; j < 13; j++) {
                let day = [];
                if (j === 2) {
                    for (let k = 1; k < 29; k++) {
                        day.push(k + '日');
                    }
                    //Leap day for years that are divisible by 4, such as 2000, 2004
                    if (i % 4 === 0) {
                        day.push(29 + '日');
                    }
                } else if (j in {1: 1, 3: 1, 5: 1, 7: 1, 8: 1, 10: 1, 12: 1}) {
                    for (let k = 1; k < 32; k++) {
                        day.push(k + '日');
                    }
                } else {
                    for (let k = 1; k < 31; k++) {
                        day.push(k + '日');
                    }
                }
                let _month = {};
                _month[j + '月'] = day;
                month.push(_month);
            }
            let _date = {};
            _date[i + '年'] = month;
            date.push(_date);
        }
        return date;
    }

    showSexPicker() {

        Picker.init({
            pickerData: ['男', '女'],
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇性別",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [230, 70, 78, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],
            pickerBg: [255, 255, 255, 1],

            onPickerConfirm: pickedValue => {
                this.setState({
                    sex: pickedValue[0]
                });
            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                console.log('area', pickedValue);
            }
        });
        Picker.show();

    }

    showReligiousPicker() {

        Picker.init({
            pickerData: religious,
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇性別",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [230, 70, 78, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],
            pickerBg: [255, 255, 255, 1],

            onPickerConfirm: pickedValue => {
                this.setState({
                    religious: pickedValue[0]
                });
            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                console.log('area', pickedValue);
            }
        });
        Picker.show();

    }

    showBirthdayPicker() {
        // let date = [];
        // for (let i = 1977; i < 2018; i++) {
        //     let month = [];
        //     for (let j = 1; j < 13; j++) {
        //         let day = [];
        //         if (j === 2) {
        //             for (let k = 1; k < 29; k++) {
        //                 day.push(k + '日');
        //             }
        //             //Leap day for years that are divisible by 4, such as 2000, 2004
        //             if (i % 4 === 0) {
        //                 day.push(29 + '日');
        //             }
        //         } else if (j in {1: 1, 3: 1, 5: 1, 7: 1, 8: 1, 10: 1, 12: 1}) {
        //             for (let k = 1; k < 32; k++) {
        //                 day.push(k + '日');
        //             }
        //         } else {
        //             for (let k = 1; k < 31; k++) {
        //                 day.push(k + '日');
        //             }
        //         }
        //         let _month = {};
        //         _month[j + '月'] = day;
        //         month.push(_month);
        //     }
        //     let _date = {};
        //     _date[i + '年'] = month;
        //     date.push(_date);
        // }


        Picker.init({
            pickerData: this._createDateData(),
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇出生日期",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [230, 70, 78, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],
            pickerBg: [255, 255, 255, 1],
            onPickerConfirm: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);

                this.setState({
                    birthday: pickedValue[0] + pickedValue[1] + pickedValue[2],
                });

                userParams.ageyear = parseInt(pickedValue[0])
                userParams.agemonth = parseInt(pickedValue[1])
                userParams.ageday = parseInt(pickedValue[2])


            },
            onPickerCancel: (pickedValue, pickedIndex) => {
                // console.log('date', pickedValue, pickedIndex);
            },
            onPickerSelect: (pickedValue, pickedIndex) => {
                // console.log('date', pickedValue, pickedIndex);
            }
        });
        Picker.show();
    }

    showMarriagePicker() {

        Picker.init({
            pickerData: marrydatas,
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇職業",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [230, 70, 78, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],
            pickerBg: [255, 255, 255, 1],

            onPickerConfirm: (pickedValue, pickedIndex) => {
                this.setState({
                    marriage: pickedValue[0]
                });
                userParams.marrystatus = parseInt(pickedIndex) + 1


            },
            onPickerCancel: pickedValue => {
                //console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                //console.log('area', pickedValue);
            }
        });
        Picker.show();

    }


    showEducationPicker() {
        Picker.init({
            pickerData: education,
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇學歷",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [230, 70, 78, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],
            pickerBg: [255, 255, 255, 1],
            onPickerConfirm: (pickedValue, pickedIndex) => {
                this.setState({
                    education: pickedValue[0]
                });

                userParams.education = parseInt(pickedIndex) + 1

            },
            onPickerCancel: (pickedValue, pickedIndex) => {
                // console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                // console.log('area', pickedValue);
            }
        });
        Picker.show();
    }

    //
    //
    showHeightPicker() {

        let date = [];
        for (let i = 130; i <= 200; i++) {
            date.push(i);
        }
        Picker.init({
            pickerData: date,
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇身高",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [230, 70, 78, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],
            pickerBg: [255, 255, 255, 1],
            onPickerConfirm: pickedValue => {
                this.setState({
                    height: pickedValue[0] + 'CM'
                });
                userParams.height = parseInt(pickedValue[0])

            },
            onPickerCancel: pickedValue => {
                // console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                // console.log('area', pickedValue);
            }
        });
        Picker.show();
    }


    showAreaPicker() {
        let data = [];
        let len = area.length;
        for (let i = 0; i < len; i++) {
            let city = [];
            for (let j = 0, cityLen = area[i]['city'].length; j < cityLen; j++) {
                let _city = {};
                _city[area[i]['city'][j]['name']] = area[i]['city'][j]['area'];
                city.push(_city);
            }

            let _data = {};
            _data[area[i]['name']] = city;
            data.push(_data);
        }
        Picker.init({
            pickerData: data,
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇所在地區",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [230, 70, 78, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],
            pickerBg: [255, 255, 255, 1],

            onPickerConfirm: pickedValue => {
                this.setState({
                    area: pickedValue[0] + ' ' + pickedValue[1]
                });
                userParams.city = pickedValue[1]

            },
            onPickerCancel: pickedValue => {
                // console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                // console.log('area', pickedValue);
            }
        });
        Picker.show();

    }


    // doReg() {
    //
    //     // Keyboard.dismiss()
    //     // console.log('doReg')
    //     if (this.state.loading) return;
    //     //
    //
    //     if (this.state.birthday.length == 0) {
    //         common.toast("請選擇生日")
    //         return;
    //     }
    //     if (this.state.marriage.length == 0) {
    //         common.toast("請選擇 婚姻狀況")
    //         return;
    //     }
    //     if (this.state.education.length == 0) {
    //         common.toast("請選擇學歷")
    //         return;
    //     }
    //
    //     if (this.state.height == 0) {
    //         common.toast("請選擇身高")
    //         return;
    //     }
    //
    //     if (this.state.area.length == 0) {
    //         common.toast("請選擇所在地區")
    //         return
    //     }
    //
    //     this.setState({
    //         loading: true,
    //
    //     });
    //
    //     let p = this.props.navigation.state.params.p
    //     console.log(p[0])
    //
    //     var user = p[0];
    //
    //     userParams.gender = p[1]
    //
    //     console.log(userParams)
    //
    //
    //     service.regSystem(user, userParams)
    //         .then((wrapData) => {
    //             console.log('wrapData  ')
    //
    //             console.log(wrapData)
    //
    //
    //             this.setState({
    //                 loading: false,
    //
    //             });
    //
    //             if (wrapData.flag == 'Success') {
    //
    //                 common.toast(wrapData.msg)
    //
    //                 this.start()
    //
    //             } else {
    //                 common.toast(wrapData.msg)
    //
    //             }
    //
    //
    //         }).then((items) => {
    //
    //     }).catch((error) => {
    //         console.log(error);
    //
    //         this.setState({
    //             loading: false,
    //
    //         });
    //
    //
    //     })
    //
    // }
    //
    //
    start() {
        this.props.navigation.push('completeS')
    }

    popGoBack() {
        this.pickHide()
        this.props.navigation.goBack()
    }

    pickHide() {
        Picker.hide()
    }


    render() {

        return (
            <Container style={gStyles.cbg}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.popGoBack()}>
                            <Icon name="arrow-back" style={{color: "#000"}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={gStyles.textAColor}>註冊</Title>
                    </Body>
                    <Right/>
                </Header>

                <Content onTouchStart={() => this.pickHide()} onScrollEndDrag={() => this.pickHide()}>
                    <View style={styles.containerView}>


                        <Item style={[styles.regSetp, {...marginTB(10, 0)}]}
                              onPress={() => this.showBirthdayPicker()}>

                            <Text style={{marginLeft: 15}}>年龄</Text>

                            <Right>
                                <Row verticalCenter>
                                    <Text
                                        style={{color: Color.gray3}}>{this.state.birthday == null ? "請選擇年齡" : this.state.birthday}</Text>
                                    <EvilIcons name="chevron-right" style={{marginRight: 5}} size={30}/>
                                </Row>
                            </Right>
                        </Item>

                        <Item style={styles.regSetp}
                              onPress={() => this.showSexPicker()}>

                            <Text style={{marginLeft: 15}}>性别</Text>

                            <Right>
                                <Row verticalCenter>
                                    <Text
                                        style={{color: Color.gray3}}>{this.state.sex == null ? "請選擇性別" : this.state.sex}</Text>
                                    <EvilIcons name="chevron-right" style={{marginRight: 5}} size={30}/>
                                </Row>

                            </Right>

                        </Item>


                        <Item style={styles.regSetp}
                              onPress={() => this.showAreaPicker()}>

                            <Text style={{marginLeft: 15}}>居住國家/地址</Text>

                            <Right>

                                <Row verticalCenter>
                                    <Text
                                        style={{color: Color.gray3}}>{this.state.area == null ? "請選擇居住國家/地址" : this.state.area}</Text>
                                    <EvilIcons name="chevron-right" style={{marginRight: 5}} size={30}/>
                                </Row>

                            </Right>

                        </Item>


                        <Item style={styles.regSetp}
                              onPress={() => this.showHeightPicker()}>

                            <Text style={{marginLeft: 15}}>高度</Text>
                            <Right>
                                <Row verticalCenter>
                                    <Text
                                        style={{color: Color.gray3}}>{this.state.height == null ? "請選擇高度" : this.state.height}</Text>
                                    <EvilIcons name="chevron-right" style={{marginRight: 5}} size={30}/>
                                </Row>

                            </Right>

                        </Item>


                        <Item style={styles.regSetp}
                              onPress={() => this.showEducationPicker()}>

                            <Text style={{marginLeft: 15}}>學歷</Text>
                            <Right>
                                <Row verticalCenter>
                                    <Text
                                        style={{color: Color.gray3}}>{this.state.education == null ? "請選擇學歷" : this.state.education}</Text>
                                    <EvilIcons name="chevron-right" style={{marginRight: 5}} size={30}/>
                                </Row>

                            </Right>

                        </Item>


                        <Item style={styles.regSetp}
                              onPress={() => this.showMarriagePicker()}>

                            <Text style={{marginLeft: 15}}>職業</Text>


                            <Right>
                                <Row verticalCenter>
                                    <Text
                                        style={{color: Color.gray3}}>{this.state.marriage == null ? "請選擇職業" : this.state.marriage}</Text>
                                    <EvilIcons name="chevron-right" style={{marginRight: 5}} size={30}/>
                                </Row>

                            </Right>

                        </Item>


                        <Item style={styles.regSetp}
                              onPress={() => this.showReligiousPicker()}>

                            <Text style={{marginLeft: 15}}>宗教</Text>

                            <Right>
                                <Row verticalCenter>
                                    <Text style={{

                                        color: Color.gray3
                                    }}>{this.state.religious == null ? "請選擇宗教" : this.state.religious}</Text>
                                    <EvilIcons name="chevron-right" style={{marginRight: 5}} size={30}/>
                                </Row>

                            </Right>

                        </Item>

                    </View>
                    <Button block warning style={{...marginLR(30, 30)}} onPress={() => this.start()}>
                        <Text>完成</Text>
                    </Button>
                </Content>

            </Container>
        );
    }
}

