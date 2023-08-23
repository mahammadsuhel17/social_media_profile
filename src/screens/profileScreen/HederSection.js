import { View, Text, ImageBackground, Image } from 'react-native'
import React, { useCallback, useState } from 'react'
import Styles from './Styles'
import { defaultImageUrl, Images, profile } from '../../assets/Images'
import CustomButton from '../../components/Button'
import { MEDIUM_TEXT_BOLD, MEDIUM_TEXT_NORMAL, SMALL_TEXT_BOLD, SMALL_TEXT_NORMAL } from '../../utils/CommonStyles'
import { scale } from 'react-native-size-matters'
import SelectCameraPopUp from '../../components/SelectCameraPopUp'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { androidCameraPermission } from '../../utils/permissions'
import ImagePicker from 'react-native-image-crop-picker';

const HederSection = () => {
    const [profile, setProfile] = useState(defaultImageUrl);
    const [showPopup, setShowPopup] = useState(false)


    const openCamara = useCallback(async () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(res => {
            console.log(res.path);
            setProfile(res.path)
        }).catch((error) => {
            console.log("error in camera", error);
        })
    }, [profile])


    const chooseMedia = useCallback(async () => {
            ImagePicker.openPicker({
                width: 300,
                height: 400,
                cropping: true,
            }).then(res => {
                console.log(res.path);
                setProfile(res.path)
            }).catch((error) => {
                console.log("error in gallary", error);
            })
    }, [profile])


    return (
        <View style={Styles.headerContainer}>
            <View style={Styles.coverImageconatiner}>
                <Image
                    resizeMode='cover'
                    style={Styles.coverImage}
                    source={Images.cover}
                />
            </View>
            <View style={Styles.imgEditContainer}>
                <View style={Styles.profileImage}>
                    <Image
                        resizeMode='center'
                        style={Styles.profile}
                        source={{ uri: profile }}
                    />
                </View>
                <CustomButton
                    NavigationHandle={() => {
                        setShowPopup(true)
                    }}
                    buttonStyle={Styles.editButton}
                    title="Edit Profile"
                />
            </View>
            <View style={Styles.contentView}>
                <Text style={[MEDIUM_TEXT_BOLD]}>
                    Mahammad suhel
                </Text>
                <Text style={[SMALL_TEXT_NORMAL]}>
                    This is my bio
                </Text>
                <View style={Styles.followersConatner}>
                    <Text style={[SMALL_TEXT_NORMAL]}>
                        588 Following
                    </Text>
                    <Text style={[SMALL_TEXT_NORMAL, { marginLeft: scale(10) }]}>
                        102 Followers
                    </Text>
                </View>
            </View>
            <SelectCameraPopUp
                onBackdropPress={() => {
                    setShowPopup(false)
                }}
                isVisible={showPopup}
                openCamara={openCamara}
                chooseMedia={chooseMedia}
                Source={profile}
                handleClose={() => {
                    setShowPopup(false)
                }}
            />
        </View>
    )
}

export default HederSection