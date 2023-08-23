import React from 'react'
import Skeleton from "@thevsstech/react-native-skeleton";
import uiColors from '../../utils/Colors';

const LoadingSckeliton = () => {
    return (
        <Skeleton>
            <Skeleton.Item 
            flexDirection="row"
             alignItems="center" 
             marginTop={20}
             backgroundColor = {uiColors.BACKGROUND_COLOR}
             padding={10}
             >
                <Skeleton.Item width={60} height={60} borderRadius={50} />
                <Skeleton.Item marginLeft={20}>
                    <Skeleton.Item width={120} height={20} borderRadius={4} />
                    <Skeleton.Item
                        marginTop={6}
                        width={80}
                        height={20}
                        borderRadius={4}
                    />
                </Skeleton.Item>
            </Skeleton.Item>
            <Skeleton.Item 
            flexDirection="row"
             alignItems="center" 
             marginTop={20}
             backgroundColor = {uiColors.BACKGROUND_COLOR}
             padding={10}
             >
                <Skeleton.Item width={60} height={60} borderRadius={50} />
                <Skeleton.Item marginLeft={20}>
                    <Skeleton.Item width={120} height={20} borderRadius={4} />
                    <Skeleton.Item
                        marginTop={6}
                        width={80}
                        height={20}
                        borderRadius={4}
                    />
                </Skeleton.Item>
            </Skeleton.Item>
            <Skeleton.Item 
            flexDirection="row"
             alignItems="center" 
             marginTop={20}
             backgroundColor = {uiColors.BACKGROUND_COLOR}
             padding={10}
             >
                <Skeleton.Item width={60} height={60} borderRadius={50} />
                <Skeleton.Item marginLeft={20}>
                    <Skeleton.Item width={120} height={20} borderRadius={4} />
                    <Skeleton.Item
                        marginTop={6}
                        width={80}
                        height={20}
                        borderRadius={4}
                    />
                </Skeleton.Item>
            </Skeleton.Item>

            <Skeleton.Item 
            flexDirection="row"
             alignItems="center" 
             marginTop={20}
             backgroundColor = {uiColors.BACKGROUND_COLOR}
             padding={10}
             >
                <Skeleton.Item width={60} height={60} borderRadius={50} />
                <Skeleton.Item marginLeft={20}>
                    <Skeleton.Item width={120} height={20} borderRadius={4} />
                    <Skeleton.Item
                        marginTop={6}
                        width={80}
                        height={20}
                        borderRadius={4}
                    />
                </Skeleton.Item>
            </Skeleton.Item>
        </Skeleton>
    )
}

export default LoadingSckeliton