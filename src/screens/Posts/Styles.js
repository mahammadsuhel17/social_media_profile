import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import uiColors from "../../utils/Colors";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/CommonStyles";

const Styles = StyleSheet.create({
    container: {
        paddingHorizontal: scale(16),
    },
    post: {
        paddingVertical: verticalScale(10)
    },
    profile: {
        height: verticalScale(200),
    },
    contentView:{
        marginTop:verticalScale(10)
    },
    IconsContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:verticalScale(10),
        paddingHorizontal:scale(5),
        justifyContent:'space-between'
    }
})

export default Styles