import {isIphoneX, marginTB, screenW} from "../../commonComponents/CommonUtil";
import Color from "../../commonComponents/Color";
import common from "../../common/common";

export default {
  container: {
    backgroundColor: "#FFF",

  },
  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    ...marginTB(20,50)
  },
  avatastyle:{
    borderRadius:30,

    width:60,
    height:60,

  },
  bottmW:{
    borderBottomWidth: 0,
    borderColor:Color.white
  },
  textC:{
    color: Color.black,
    fontWeight: 'bold',
  },
  regSetp:{

    backgroundColor:Color.white,

    height:45,
    // borderRadius:15,
    // alignItems:'center',

    // width:common.deviceWidth - 100,
  },
  botomBtn:{
    backgroundColor:Color.carColor,
    width:70,
    height:30,
    alignSelf: 'center',
    marginTop: 50,

  },
};
