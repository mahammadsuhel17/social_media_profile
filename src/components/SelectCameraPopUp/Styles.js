import { Dimensions, StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { SCREEN_WIDTH } from "../../utils/CommonStyles";

const styles = StyleSheet.create({

    Card: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingVertical: verticalScale(20),
        width: '80%',
        backgroundColor: '#ffffff',
        padding: moderateScale(25),
        borderRadius: moderateScale(20),
    },

    CloseView: {
        alignSelf:'flex-end',
        justifyContent:'center',
        alignItems:'center',
        padding:3,
        left:scale(10),
        bottom:verticalScale(10)
    },

    closeImg: {
        width: moderateScale(30),
        height: moderateScale(30),
    },

    ImageSaveRow: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '45%',
    },

    ImageWrapper: {
        width: '100%',
        height: 'auto',
    },

    TextSaveBg: {
        fontFamily: 'Saira-Medium',
        fontSize: scale(16),
        color: '#000000',
        marginTop: 4,
        alignItems: 'center',
        alignSelf: 'center',
    },

    ImageSaveBackground: {
        width: moderateScale(70),
        height: moderateScale(70),
        borderRadius: moderateScale(60),
        alignItems: 'center',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
    },

    profile: {
        height: moderateScale(120),
        width: moderateScale(120),
        borderRadius: moderateScale(120),
        alignSelf: 'center',
        position: 'absolute',
        bottom: -80,
        borderWidth: 4,
        borderColor: "black",
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles
