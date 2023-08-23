import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import uiColors from "../../utils/Colors";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:uiColors.BACKGROUND_COLOR
    },
    headerContainer: {
        height: verticalScale(250),
    },
    coverImageconatiner: {
        height: '45%',
        width: '100%',
    },
    coverImage: {
        height: '100%',
        width: '100%',
    },
    imgEditContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: scale(16),
        height: '20%'
    },
    profileImage: {
        height: moderateScale(70),
        width: moderateScale(70),
        borderRadius: moderateScale(35),
        borderWidth: moderateScale(3),
        borderColor: uiColors.PRIMARY_COLOR,
        justifyContent: "center",
        alignItems: 'center',
        bottom: verticalScale(35),
    },
    profile:{
        height: moderateScale(70),
        width: moderateScale(70),
        borderRadius: moderateScale(35),
    },
    editButton: {
        borderWidth: moderateScale(2),
        paddingHorizontal: scale(10),
        paddingVertical: scale(5),
        borderColor: uiColors.PRIMARY_COLOR
        // bottom:verticalScale(10)
    },
    contentView: {
        paddingHorizontal: scale(16)
    },
    followersConatner: {
        flexDirection: 'row',
        marginTop: verticalScale(10)
    },
    topTabs: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: verticalScale(10)
    },
    tab: {
        width: '50%',
        justifyContent: 'center',
        alignItems: "center",
        borderColor: uiColors.PRIMARY_COLOR,
        paddingVertical: verticalScale(10)
    }
})

export default Styles