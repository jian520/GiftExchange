

import common from "../../common/common"
import commonColor from "../../../native-base-theme/variables/commonColor";
import {isIphoneX, marginLR, marginTB, paddingTB} from "../../commonComponents/CommonUtil";
import Color from "../../commonComponents/Color";

export default {

    containerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

         ...marginTB(50,50)
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
        width:common.deviceWidth - 100,
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
        ...marginTB(50,10),
        backgroundColor:Color.pickBackground,
        width:common.deviceWidth - 100,
        height:45,
        borderRadius:15,
        alignItems:'center',
        justifyContent: 'center'
    },


};
