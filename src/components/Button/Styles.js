import { StyleSheet } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import uiColors from '../../utils/Colors';


const styles = StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      // height: verticalScale(45),
      borderRadius: moderateScale(6),
      backgroundColor: uiColors.buttonColor,
      alignSelf:'center'
    },
  });
  

export default styles;