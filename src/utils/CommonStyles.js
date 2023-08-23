import { Dimensions } from 'react-native'
import { scale } from 'react-native-size-matters'
import uiColors from './Colors'

const SMALL_TEXT_NORMAL = {
    fontSize: scale(12),
    color: uiColors.FONT_COLOR,
    fontFamily: 'Roboto-Regular'
}
const MEDIUM_TEXT_NORMAL = {
    fontSize: scale(18),
    color: uiColors.FONT_COLOR,
    fontFamily: 'Roboto-Regular'
}
const LARGE_TEXT_NORMAL = {
    fontSize: scale(24),
    color: uiColors.FONT_COLOR,
    fontFamily: 'Roboto-Regular'
}
const SMALL_TEXT_BOLD = {
    fontSize: scale(12),
    color: uiColors.FONT_COLOR,
    fontFamily: 'Roboto-Medium',
    fontWeight:'bold'
}
const MEDIUM_TEXT_BOLD = {
    fontSize: scale(18),
    color: uiColors.FONT_COLOR,
    fontFamily: 'Roboto-Medium',
    fontWeight:'bold'
}
const LARGE_TEXT_BOLD = {
    fontSize: scale(24),
    color: uiColors.FONT_COLOR,
    fontFamily: 'Roboto-Bold',
    fontWeight:'bold'
}

export const { height, width } = Dimensions.get('window')
export const SCREEN_HEIGHT = height
export const SCREEN_WIDTH = width

export {
    SMALL_TEXT_NORMAL,
    MEDIUM_TEXT_NORMAL,
    LARGE_TEXT_NORMAL,
    SMALL_TEXT_BOLD,
    MEDIUM_TEXT_BOLD,
    LARGE_TEXT_BOLD,
};