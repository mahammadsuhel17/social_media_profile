import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {  SMALL_TEXT_BOLD } from '../../utils/CommonStyles'
import HederSection from './HederSection'
import Posts from '../Posts/Posts'
import Styles from './Styles'
import Friends from '../friends/Friends'
import { moderateScale } from 'react-native-size-matters'

const ProfileScreen = () => {
    const [selectedPage, setSelectedPage] = useState({
        id: 1,
        title: 'Post'
    },)

    // Tabs data
    const data = [
        {
            id: 1,
            title: 'Post'
        },
        {
            id: 2,
            title: 'Friends'
        }
    ]

    // callback for when tab selected
    const handleSelectTab = (item) => {
        setSelectedPage(item)
    }
    return (
        <ScrollView
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
            style={Styles.container}>

            <HederSection />

            <View style={Styles.topTabs}>
                {
                    data.map((item) => {

                        return (
                            <TouchableOpacity
                                key={item?.id}
                                style={{
                                    ...Styles.tab,
                                    borderBottomWidth: selectedPage?.id === item?.id ? moderateScale(2) : 0
                                }}
                                onPress={() => { handleSelectTab(item) }}
                            >
                                <Text style={[SMALL_TEXT_BOLD]}>
                                    {item?.title}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>

            {/* check selcted tab is post then show posts else show friends */}
            {selectedPage.id === 1 ?
                <Posts /> :
                <Friends />}
        </ScrollView>

    )
}

export default ProfileScreen