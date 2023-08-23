import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import {SMALL_TEXT_NORMAL } from '../../utils/CommonStyles';
import styles from './Styles';


const CustomButton = ({
  title,
  NavigationHandle,
  buttonStyle,
  disabled
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, buttonStyle]}
      onPress={
        NavigationHandle
      }>
      <Text style={[SMALL_TEXT_NORMAL]}>{title}</Text>
    </TouchableOpacity>
  );
};



export default CustomButton

