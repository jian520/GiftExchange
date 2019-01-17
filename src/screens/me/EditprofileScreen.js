/**
  * desc：
  * author：
  * date： 
  */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import styles from "./styles";
import {
    Body,
    Button, Container,
    Content,
    Header, Icon,
    Left,
    List,
    ListItem,
    Right,
    Thumbnail,
    Text,
    Segment,
    Title, Item
} from "native-base";
import gStyles from "../../common/globalStyles";

import Color from "../../commonComponents/Color";
import { marginLR, marginTB, paddingTB } from "../../commonComponents/CommonUtil";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Picker from "react-native-picker";
import { education, marrydatas } from "../../common/datas";
import area from "../../common/area";
import Row from "../../commonComponents/Row";
import API from "../../common/API";
import BaseImg from "../../commonComponents/BaseImg";
import ImagePicker from 'react-native-image-picker';


var options = {
    title: '请选择图片来源',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '相册图片',

    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};



export default class EditprofileScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading : false,
            sex : '請選擇性別',
            birthday : null,
            marriage : '請選擇職業',
            education : '請選擇學歷',
            height : '請選擇身高',
            area : '請選擇國家/地址',
            seg : 2,
            image: null,
            images: null
        };

    }

    _createDateData() {
        let date = [];
        for (let i = 1970;
            i < 2020;
            i++) {
            let month = [];
            for (let j = 1;
                j < 13;
                j++) {
                let day = [];
                if (j === 2) {
                    for (let k = 1;
                        k < 29;
                        k++) {
                        day.push(k + '日');
                    }
                    //Leap day for years that are divisible by 4, such as 2000, 2004
                    if (i % 4 === 0) {
                        day.push(29 + '日');
                    }
                }
                else if (j in { 1 : 1, 3 : 1, 5 : 1, 7 : 1, 8 : 1, 10 : 1, 12 : 1 }) {
                    for (let k = 1;
                        k < 32;
                        k++) {
                        day.push(k + '日');
                    }
                }
                else {
                    for (let k = 1;
                        k < 31;
                        k++) {
                        day.push(k + '日');
                    }
                }
                let _month = {};
                _month[ j + '月' ] = day;
                month.push(_month);
            }
            let _date = {};
            _date[ i + '年' ] = month;
            date.push(_date);
        }
        return date;
    }

    showBirthdayPicker() {

        Picker.init({
            pickerData : this._createDateData(),
            pickerConfirmBtnText : "確定",
            pickerTitleText : "請選擇出生日期",
            pickerCancelBtnText : "取消",
            pickerToolBarBg : [ 230, 70, 78, 1 ],
            pickerTitleColor : [ 255, 255, 255, 1 ],
            pickerCancelBtnColor : [ 255, 255, 255, 1 ],
            pickerConfirmBtnColor : [ 255, 255, 255, 1 ],
            pickerBg : [ 255, 255, 255, 1 ],
            onPickerConfirm : (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);

                this.setState({
                    birthday : pickedValue[ 0 ] + pickedValue[ 1 ] + pickedValue[ 2 ],
                });

                // userParams.ageyear = parseInt(pickedValue[0])
                // userParams.agemonth = parseInt(pickedValue[1])
                // userParams.ageday = parseInt(pickedValue[2])

            },
            onPickerCancel : (pickedValue, pickedIndex) => {
                // console.log('date', pickedValue, pickedIndex);
            },
            onPickerSelect : (pickedValue, pickedIndex) => {
                // console.log('date', pickedValue, pickedIndex);
            }
        });
        Picker.show();
    }

    showSexPicker() {

        Picker.init({
            pickerData : [ '男', '女' ],
            pickerConfirmBtnText : "確定",
            pickerTitleText : "請選擇性別",
            pickerCancelBtnText : "取消",
            pickerToolBarBg : [ 230, 70, 78, 1 ],
            pickerTitleColor : [ 255, 255, 255, 1 ],
            pickerCancelBtnColor : [ 255, 255, 255, 1 ],
            pickerConfirmBtnColor : [ 255, 255, 255, 1 ],
            pickerBg : [ 255, 255, 255, 1 ],

            onPickerConfirm : pickedValue => {
                this.setState({
                    sex : pickedValue[ 0 ]
                });
            },
            onPickerCancel : pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect : pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                console.log('area', pickedValue);
            }
        });
        Picker.show();

    }

    showMarriagePicker() {

        Picker.init({
            pickerData : marrydatas,
            pickerConfirmBtnText : "確定",
            pickerTitleText : "請選擇職業",
            pickerCancelBtnText : "取消",
            pickerToolBarBg : [ 230, 70, 78, 1 ],
            pickerTitleColor : [ 255, 255, 255, 1 ],
            pickerCancelBtnColor : [ 255, 255, 255, 1 ],
            pickerConfirmBtnColor : [ 255, 255, 255, 1 ],
            pickerBg : [ 255, 255, 255, 1 ],

            onPickerConfirm : (pickedValue, pickedIndex) => {
                this.setState({
                    marriage : pickedValue[ 0 ]
                });
                // userParams.marrystatus = parseInt(pickedIndex) + 1

            },
            onPickerCancel : pickedValue => {
                //console.log('area', pickedValue);
            },
            onPickerSelect : pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                //console.log('area', pickedValue);
            }
        });
        Picker.show();

    }

    showEducationPicker() {
        Picker.init({
            pickerData : education,
            pickerConfirmBtnText : "確定",
            pickerTitleText : "請選擇學歷",
            pickerCancelBtnText : "取消",
            pickerToolBarBg : [ 230, 70, 78, 1 ],
            pickerTitleColor : [ 255, 255, 255, 1 ],
            pickerCancelBtnColor : [ 255, 255, 255, 1 ],
            pickerConfirmBtnColor : [ 255, 255, 255, 1 ],
            pickerBg : [ 255, 255, 255, 1 ],
            onPickerConfirm : (pickedValue, pickedIndex) => {
                this.setState({
                    education : pickedValue[ 0 ]
                });

                // userParams.education = parseInt(pickedIndex) + 1

            },
            onPickerCancel : (pickedValue, pickedIndex) => {
                // console.log('area', pickedValue);
            },
            onPickerSelect : pickedValue => {
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
        for (let i = 130;
            i <= 200;
            i++) {
            date.push(i);
        }
        Picker.init({
            pickerData : date,
            pickerConfirmBtnText : "確定",
            pickerTitleText : "請選擇身高",
            pickerCancelBtnText : "取消",
            pickerToolBarBg : [ 230, 70, 78, 1 ],
            pickerTitleColor : [ 255, 255, 255, 1 ],
            pickerCancelBtnColor : [ 255, 255, 255, 1 ],
            pickerConfirmBtnColor : [ 255, 255, 255, 1 ],
            pickerBg : [ 255, 255, 255, 1 ],
            onPickerConfirm : pickedValue => {
                this.setState({
                    height : pickedValue[ 0 ] + 'CM'
                });
                // userParams.height = parseInt(pickedValue[0])

            },
            onPickerCancel : pickedValue => {
                // console.log('area', pickedValue);
            },
            onPickerSelect : pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                // console.log('area', pickedValue);
            }
        });
        Picker.show();
    }

    showAreaPicker() {
        let data = [];
        let len = area.length;
        for (let i = 0;
            i < len;
            i++) {
            let city = [];
            for (let j = 0, cityLen = area[ i ][ 'city' ].length;
                j < cityLen;
                j++) {
                let _city = {};
                _city[ area[ i ][ 'city' ][ j ][ 'name' ] ] = area[ i ][ 'city' ][ j ][ 'area' ];
                city.push(_city);
            }

            let _data = {};
            _data[ area[ i ][ 'name' ] ] = city;
            data.push(_data);
        }
        Picker.init({
            pickerData : data,
            pickerConfirmBtnText : "確定",
            pickerTitleText : "請選擇所在地區",
            pickerCancelBtnText : "取消",
            pickerToolBarBg : [ 230, 70, 78, 1 ],
            pickerTitleColor : [ 255, 255, 255, 1 ],
            pickerCancelBtnColor : [ 255, 255, 255, 1 ],
            pickerConfirmBtnColor : [ 255, 255, 255, 1 ],
            pickerBg : [ 255, 255, 255, 1 ],

            onPickerConfirm : pickedValue => {
                this.setState({
                    area : pickedValue[ 0 ] + ' ' + pickedValue[ 1 ]
                });
                // userParams.city = pickedValue[1]

            },
            onPickerCancel : pickedValue => {
                // console.log('area', pickedValue);
            },
            onPickerSelect : pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                // console.log('area', pickedValue);
            }
        });
        Picker.show();

    }

    static propTypes = {}

    /**
     * 初始化了状态之后，在第一次绘制 render() 之前
     * （能够使用setState()来改变属性 有且只有一次）
     */
    componentWillMount() {

    }

    /**
     * 这个函数开始，就可以和 JS 其他框架交互了，例如设置计时 setTimeout 或者 setInterval，
     * 或者发起网络请求。这个函数也是只被调用一次
     * （能够使用setState()来改变属性 有且只有一次）
     */
    componentDidMount() {

    }

    /**
     * 输入参数 nextProps 是即将被设置的属性，旧的属性还是可以通过 this.props 来获取。在这个回调函数里面，你可以根据属性的变化，
     * 通过调用 this.setState() 来更新你的组件状态，这里调用更新状态是安全的，并不会触发额外的 render()
     * （能够使用setState()来改变属性 多次调用）
     */
    componentWillReceiveProps() {

    }

    /**
     * 组件要被从界面上移除的时候，就会调用 componentWillUnmount()
     * （不能够使用setState()来改变属性 有且只有一次调用）
     */
    componentWillUnmount() {

    }

    goBack() {
        this.pickHide()
        this.props.navigation.goBack()
    }

    pickHide() {
        Picker.hide()
    }

    pickSingle() {

            ImagePicker.showImagePicker(options, (response) => {
                console.log('Response = ', response);

                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {
                    const source = {uri: response.uri};

                    // You can also display the image using data:
                    // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                    this.setState({
                        image: source,
                    });
                }
            });

    }



    renderAsset(image) {
        if (image)
            return <Thumbnail source={image} />

        if (this.state.image == null) {
            return <Thumbnail source={BaseImg.meImg.defaultAvatar} />
        }
        return <Thumbnail source={{uri: 'https://oss.zuimeimami.com/avatar/doctor_fC14530706150363566e0dce962bb/1520556522703.jpg'}}/>


    }

    render() {
        return (
            <Container style={gStyles.cbg}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.goBack()}>
                            <Icon name="arrow-back" style={{ color : "#000" }}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={gStyles.textAColor}>编辑个人资料</Title>
                    </Body>
                    <Right/>

                </Header>

                <Content onTouchStart={() => this.pickHide()} onScrollEndDrag={() => this.pickHide()}>
                    <Segment style={{ marginTop : 30 }}>
                        <Button
                            active={this.state.seg === 1 ? true : false}
                            first
                            onPress={() => this.setState({ seg : 1 })}
                        >
                            <Text>照片</Text>
                        </Button>
                        <Button
                            last
                            active={this.state.seg === 2 ? true : false}
                            onPress={() => this.setState({ seg : 2 })}
                        >
                            <Text>详细信息</Text>
                        </Button>
                    </Segment>

                    {this.state.seg === 1 &&
                    <View style={{ flex : 1, ...marginTB(50, 50) }}>
                        <List style={{ backgroundColor : Color.white}}>
                            <ListItem avatar onPress={() => this.pickSingle()}>
                                <Left style={{ marginTop : -5}}>
                                    {this.renderAsset(this.state.image)}
                                    {/*<Thumbnail source={{ uri : 'https://oss.zuimeimami.com/avatar/doctor_fC14530706150363566e0dce962bb/1520556522703.jpg' }}*/}
                                               {/*style={styles.avatastyle}/>*/}
                                </Left>
                                <Body style={styles.bottmW}>
                                    <Text style={{ ...paddingTB(15, 15), color : Color.black ,lineHeight:35}}>JM</Text>
                                </Body>
                                <Right style={[styles.bottmW,{marginTop:16}]}>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                        </List>

                    </View>
                    }

                    {this.state.seg === 2 &&
                    <View style={styles.containerView}>
                        <Item style={[ styles.regSetp, { ...marginTB(50, 0) } ]}
                              onPress={() => this.showBirthdayPicker()}>

                            <Text style={{ marginLeft : 15, fontWeight : 'bold' }}>年龄</Text>

                            <Right>
                                <Row verticalCenter>
                                    <Text style={{ color : Color.gray3 }}>{this.state.birthday == null ? "請選擇年齡" : this.state.birthday}</Text>
                                    <EvilIcons name="chevron-right" size={30}/>
                                </Row>
                            </Right>
                        </Item>

                        <Item style={styles.regSetp}
                              onPress={() => this.showAreaPicker()}>

                            <Text style={{ marginLeft : 15, fontWeight : 'bold' }}>居住国家/地址</Text>
                            <Right>
                                <Row verticalCenter>
                                    <Text style={{ color : Color.gray3 }}>{this.state.area}</Text>
                                    <EvilIcons name="chevron-right" size={30}/>
                                </Row>
                            </Right>
                        </Item>

                        <Item style={styles.regSetp}
                              onPress={() => this.showHeightPicker()}>

                            <Text style={{ marginLeft : 15, fontWeight : 'bold' }}>高度</Text>
                            <Right>
                                <Row verticalCenter>
                                    <Text style={{ color : Color.gray3 }}>{this.state.height}</Text>
                                    <EvilIcons name="chevron-right" size={30}/>
                                </Row>
                            </Right>
                        </Item>

                        <Item style={styles.regSetp}
                              onPress={() => this.showEducationPicker()}>

                            <Text style={{ marginLeft : 15, fontWeight : 'bold' }}>学历</Text>
                            <Right>
                                <Row verticalCenter>
                                    <Text style={{ color : Color.gray3 }}>{this.state.education}</Text>
                                    <EvilIcons name="chevron-right" size={30}/>
                                </Row>

                            </Right>
                        </Item>
                        <Item style={styles.regSetp}
                              onPress={() => this.showMarriagePicker()}>

                            <Text style={{ marginLeft : 15, fontWeight : 'bold' }}>職業</Text>
                            <Right>

                                <Row verticalCenter>
                                    <Text style={{ color : Color.gray3 }}>{this.state.marriage}</Text>
                                    <EvilIcons name="chevron-right" size={30}/>
                                </Row>
                            </Right>
                        </Item>
                    </View>
                    }

                    <Button block warning style={{ ...marginLR(30, 30) }} onPress={() => this.goBack()}>
                        <Text>完成</Text>
                    </Button>
                </Content>

            </Container>
        );
    }
}


