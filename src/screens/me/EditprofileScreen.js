/**
  * desc：
  * author：
  * date： 
  */
import React, {Component} from 'react';
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
    Separator,
    Text,
    Segment,
    Title, Item
} from "native-base";
import gStyles from "../../common/globalStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
import Color from "../../commonComponents/Color";
import {marginTB, paddingTB} from "../../commonComponents/CommonUtil";
import {Col} from "react-native-easy-grid";
import Picker from "react-native-picker";
import {education, marrydatas, religious} from "../../common/datas";
import area from "../../common/area";

export default class EditprofileScreen  extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            sex: '',
            birthday: '',
            marriage: '',
            education: '',
            height: '',
            area: '',
            religious:''
        };
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

    goBack(){
        this.pickHide()
        this.props.navigation.goBack()
    }

    pickHide(){
        Picker.hide()
    }


    render() {
        return (
            <Container style={styles.container}>
                <Header style={{backgroundColor:Color.pickBackground}}>
                    <Left>
                        <Button transparent onPress={() =>this.goBack() }>
                            <Icon name="arrow-back" style={{color: "#000"}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={gStyles.textCEolor}>编辑个人资料</Title>
                    </Body>
                    <Right/>

                </Header>

                <Content style={{backgroundColor:Color.pickBackground}} onTouchStart={() => this.pickHide()} onScrollEndDrag={() => this.pickHide()}>
                    <Segment style={{...marginTB(20,0)}}>
                        <Button first style={{borderColor:Color.white,backgroundColor:Color.pickBackground}} active={true}
                       >
                            <Text style={{color:Color.white}}>照片</Text>
                        </Button>
                        <Button style={{borderColor:Color.white,backgroundColor:Color.white}} active={true}>
                            <Text style={{color:Color.orange}}>详细资料</Text>
                        </Button>

                    </Segment>
                <View style={styles.containerView}>
                    <Item style={styles.regSetp}
                          onPress={() => this.showSexPicker()}>

                        <Text style={{color: Color.pickBackground, marginLeft: 15,fontWeight: 'bold'}}>年龄</Text>

                        <Right>
                            <Text style={ {paddingRight: 15,color: Color.pickBackground}}>{this.state.birthday}</Text>

                        </Right>
                    </Item>

                    <Item style={styles.regSetp}
                          onPress={() => this.showAreaPicker()}>

                        <Text style={{color: Color.pickBackground, marginLeft: 15,fontWeight: 'bold'}}>居住国家/地址</Text>
                        <Right>
                            <Text style={ {paddingRight: 15,color: Color.pickBackground}}>{this.state.birthday}</Text>

                        </Right>
                    </Item>

                    <Item style={styles.regSetp}
                          onPress={() => this.showHeightPicker()}>

                        <Text style={{color: Color.pickBackground, marginLeft: 15,fontWeight: 'bold'}}>高度</Text>
                        <Right>
                            <Text style={ {paddingRight: 15,color: Color.pickBackground}}>{this.state.birthday}</Text>

                        </Right>
                    </Item>

                    <Item style={styles.regSetp}
                          onPress={() => this.showEducationPicker()}>

                        <Text style={{color: Color.pickBackground, marginLeft: 15,fontWeight: 'bold'}}>学历</Text>
                        <Right>
                            <Text style={ {paddingRight: 15,color: Color.pickBackground}}>{this.state.birthday}</Text>

                        </Right>
                    </Item>
                    <Item style={styles.regSetp}
                          onPress={() => this.showMarriagePicker()}>

                        <Text style={{color: Color.pickBackground, marginLeft: 15,fontWeight: 'bold'}}>職業</Text>
                        <Right>
                            <Text style={ {paddingRight: 15,color: Color.pickBackground}}>{this.state.birthday}</Text>

                        </Right>
                    </Item>
                </View>
                    <Button block style={styles.botomBtn} onPress={() => this.goBack()}>
                        <Text>完成</Text>
                    </Button>
                </Content>

            </Container>
        );
    }
}


