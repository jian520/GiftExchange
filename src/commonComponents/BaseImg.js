

// resizeMode enum('cover', 'contain', 'stretch', 'repeat', 'center') #
//
//     决定当组件尺寸和图片尺寸不成比例的时候如何调整图片的大小。
//
// cover: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都大于等于容器视图的尺寸（如果容器有padding内衬的话，则相应减去）。__译注__：这样图片完全覆盖甚至超出容器，容器中不留任何空白。
//
// contain: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都小于等于容器视图的尺寸（如果容器有padding内衬的话，则相应减去）。__译注__：这样图片完全被包裹在容器中，容器中可能留有空白
//
// stretch: 拉伸图片且不维持宽高比，直到宽高都刚好填满容器。
//
// repeat: 重复平铺图片直到填满容器。图片会维持原始尺寸。仅iOS可用。
//
// center: 居中不拉伸。

export default {
    StartImg:{
        arrowRight:require('../img/arrow_more02_w.png'),
        rest:require('../img/gift1.png'),
        heart:require('../img/heart.png'),
        bgImg:require('../img/bg.png'),
    },
    meImg:{
        defaultAvatar:require("../img/login-icon.png"),
    },
}

