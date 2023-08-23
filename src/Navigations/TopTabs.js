import { StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { moderateScale, scale} from 'react-native-size-matters';
import { Friends, Posts } from '../screens';
import {SMALL_TEXT_NORMAL } from '../utils/CommonStyles';
import uiColors from '../utils/Colors';
import { MainRoutStrings } from '../utils/RouteStrings';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: [SMALL_TEXT_NORMAL, styles.tabBarLabelStyle],
                tabBarIndicatorStyle: { backgroundColor: uiColors.PRIMARY_COLOR, height: moderateScale(3) },
                tabBarShowLabel: true,
                tabBarStyle: styles.tabBarStyle,
            }}
        >
            <Tab.Screen name={MainRoutStrings.postsScreen} component={Posts} />
            <Tab.Screen name={MainRoutStrings.friendsScreen} component={Friends} />
        </Tab.Navigator>
    )
}

export default TopTabs

const styles = StyleSheet.create({
    tabBarLabelStyle: {
        fontSize: scale(14),
        color: uiColors.FONT_COLOR,
        fontFamily: 'Roboto-Regular',
        textTransform: 'none'
    },
    tabBarStyle: {
        backgroundColor: uiColors.BACKGROUND_COLOR,
        elevation:0
    },
})