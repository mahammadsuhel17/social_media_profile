import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Styles from './Styles'
import axios from 'axios'
import { GET_FRIENDS} from '../../configs/urls'
import { SMALL_TEXT_BOLD, SMALL_TEXT_NORMAL } from '../../utils/CommonStyles'
import {verticalScale } from 'react-native-size-matters'
import LoadingSckeliton from '../../components/LoadingSckeliton/LoadingSckeliton'

const Friends = () => {
    const [friendsData, setFriendsData] = useState([])
    const [showSkeleton, setShowSkeleton] = useState(false)

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = () => {
        setShowSkeleton(true)
        axios.get(GET_FRIENDS)
            .then((res) => {
                setShowSkeleton(false)
                console.log("res inn res", res?.data?.users);
                setFriendsData(res?.data?.users)
            }).catch((error) => {
                setShowSkeleton(false)
                Alert.alert("Something went wrong please try again")
            })
    }


    const renderFriendsData = ({ item }) => {
        return (
            <View style={Styles.post}>
                <Image
                    style={Styles.profile}
                    source={{ uri: item?.image }}
                />
                <View style={Styles.contentView}>
                    <Text style={[SMALL_TEXT_BOLD]}>
                        {`${item?.firstName} ${item?.maidenName} ${item?.lastName}`}
                    </Text>
                    <Text style={[SMALL_TEXT_NORMAL, { marginTop: verticalScale(10) }]}>
                        {item?.university}
                    </Text>
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
                data={friendsData}
                keyExtractor={(item) => item?.id}
                renderItem={renderFriendsData}
            >

            </FlatList> :
                <LoadingSckeliton />

            }
        </View>
    )
}

export default Friends