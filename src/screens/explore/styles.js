import {marginTB, screenW} from "../../commonComponents/CommonUtil";
import Color from "../../commonComponents/Color";


export default {
    container: {
        backgroundColor: "#FFF"
    },
    mb10: {
        marginBottom: 10
    },
    regSetp:{
        ...marginTB(10,10),
        backgroundColor:Color.white,
        width:200,
        height:30,
        borderRadius:10,
        left: 20,
    },
    inputStyle:{
        ...marginTB(20,10),
        backgroundColor:Color.white,
        width:screenW -40,
        height:150,
        borderRadius:10,
        left: 20,
        padding: 15,
        fontWeight: 'bold'
    },
    pickImg:{
        ...marginTB(5,10),
        backgroundColor:Color.white,
        width:screenW -40-50,
        height:30,
        borderRadius:10,
        left: 8,
    },
    image:{
        height:100,
        width:150,
        borderRadius:0,
        marginLeft:15,
    },
};
