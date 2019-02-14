import {marginTB} from "../../commonComponents/CommonUtil";
import Color from "../../commonComponents/Color";

export default {
  container: {
    backgroundColor: "#FFF"
  },
  mb10: {
    marginBottom: 10
  },
  avatastyle:{
    borderRadius:50,
    width:100,
    height:100,
  },

  bottmW:{
    borderBottomWidth: 0,

  },
  shoppingBtn:{
    width: 200,
    alignSelf: 'center',
    ...marginTB(40,40),
    backgroundColor: Color.red,

  }
};
