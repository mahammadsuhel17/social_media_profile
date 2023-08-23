import { View, Text, Alert, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GET_POSTS } from '../../configs/urls'
import Styles from './Styles'
import {SMALL_TEXT_BOLD, SMALL_TEXT_NORMAL } from '../../utils/CommonStyles'
import { scale, verticalScale } from 'react-native-size-matters'
import { IconsData } from '../../Data/postIconsData'
import LoadingSckeliton from '../../components/LoadingSckeliton/LoadingSckeliton'

const Posts = () => {
    const [postData, setPostData] = useState([])
    const [showSkeleton, setShowSkeleton] = useState(false)
    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = () => {
        setShowSkeleton(true)
        axios.get(GET_POSTS)
            .then((res) => {
                setShowSkeleton(false)
                console.log("res inn res", res?.data?.photos);
                setPostData(res?.data?.photos)
            }).catch((error) => {
                setShowSkeleton(false)
                Alert.alert("Something went wrong please try again")
            })
    }

    const renderPostData = ({ item }) => {
        // console.log('ggg', item);
        return (
            <View style={Styles.post}>
                <Image
                    style={Styles.profile}
                    source={{ uri: item?.url }}
                />
                <View style={Styles.contentView}>
                    <Text style={[SMALL_TEXT_BOLD]}>
                        {item?.title}
                    </Text>
                    <Text style={[SMALL_TEXT_NORMAL, { marginTop: verticalScale(10) }]}>
                        {item?.description}
                    </Text>
                </View>
                <View style={Styles.IconsContainer}>
                    {
                        IconsData.map((item, index) => {
                            return (
                                <View style={Styles.IconsContainer}>
                                    <Image
                                        source={item?.icon}
                                    />
                                    <Text style={[SMALL_TEXT_BOLD, { marginLeft: scale(10) }]}>
                                        {Math.floor(Math.random() * 1000)}
                                    </Text>
                                </View>
                            )

                        })
                    }
                </View>
            </View>
        )
    }

    return (
        <View
            style={Styles.container}
        >
            {!showSkeleton ? <FlatList
                nestedScrollEnabled
                data={postData}
                keyExtractor={(item) => item?.id}
                renderItem={renderPostData}
            >

            </FlatList> :
                <LoadingSckeliton />

            }
        </View>

    )
}

export default Posts