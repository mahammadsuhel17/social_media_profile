import {
    Dimensions,
    Image,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Modal from "react-native-modal";
import React from 'react';
import styles from './Styles';
import { Images } from '../../assets/Images';


const SelectCameraPopUp = props => {
    const { handleClose, chooseMedia, openCamara, Source, isVisible, onBackdropPress } = props;
    return (
        <Modal 
        onBackdropPress={onBackdropPress}
        isVisible={isVisible}>
                <View style={styles.Card}>
                    <Pressable
                        onPress={handleClose}
                        style={styles.CloseView}>
                        <Image style={styles.closeImg} source={Images.close} />
                    </Pressable>
                    <View>
                        <View style={styles.profile}>
                            <Image
                                style={{ height: '95%', width: '95%', borderRadius: 100 }}
                                source={{ uri: Source }} />
                        </View>

                    </View>
                    <View style={styles.ImageSaveRow}>

                        <TouchableOpacity
                            onPress={chooseMedia}>
                            <View style={styles.ImageWrapper}>
                                <View style={styles.ImageSaveBackground}>
                                    <Image
                                        style={{ height: 40, width: 40 }}
                                        source={Images.gallery} />
                                </View>
                                <Text style={styles.TextSaveBg}>Gallery</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={openCamara}>
                            <View style={styles.ImageWrapper}>
                                <View style={styles.ImageSaveBackground}>
                                    <Image
                                        style={{ height: 40, width: 40 }}
                                        source={Images.camera} />
                                </View>
                                <Text style={styles.TextSaveBg}>Camera</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
        </Modal>
    );
};

export default SelectCameraPopUp;

