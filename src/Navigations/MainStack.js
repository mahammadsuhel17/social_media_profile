import React from 'react'
import { ProfileScreen } from '../screens'
import { MainRoutStrings } from '../utils/RouteStrings'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator()
const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen component={ProfileScreen} name={MainRoutStrings.profileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack