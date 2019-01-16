

import common from "../../common/common"
import commonColor from "../../../native-base-theme/variables/commonColor";
import {isIphoneX, marginLR, marginTB, paddingTB} from "../../commonComponents/CommonUtil";
import Color from "../../commonComponents/Color";

export default {

    containerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

         ...marginTB(10,50)
    },
    videoBox:{
        width:common.deviceWidth - 30,
        height:200,
        backgroundColor:'#000',
        marginBottom:10
    },
    video:{
        width:common.deviceWidth - 30,
        height:200,
        backgroundColor:'#000'
    },
    header:{
        backgroundColor:"#fff",
        ...paddingTB(30,30),
        fontWeight: "bold",

    },
    input:{
        width:common.deviceWidth - 30,
        borderBottomWidth: 2,

    },
    botomBtn:{
        backgroundColor:Color.carColor,
        width:70,
        height:30,
        alignSelf: 'center',
        bottom:isIphoneX()?49+33:49,
    },
    regSetp:{

        backgroundColor:Color.white,

        height:45,
    },


};
