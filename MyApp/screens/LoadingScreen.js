import React, {useState, useEffect} from 'react';
import {styles, theme} from '../constants/Styles';
import {View} from 'react-native';

import Svg, {Rect, Circle} from 'react-native-svg';
import ContentLoader from 'react-native-masked-loader';
import {screenWidth} from '../utils/ScreenParams';

const LoadingScreen = () => {
    const adjust = 2;
    const adjust2 = 4;
    const getMaskedElement_1 = (
        <Svg
            height={screenWidth / adjust + adjust2 * 4}
            width={screenWidth / adjust}
            fill={theme().background}
        >
            <Rect
                x="0"
                y="0"
                rx="8"
                ry="8"
                width="50%"
                height={(screenWidth / (adjust * 4)) * (2 / 5)}
            />
            <Rect
                x="0"
                y={(screenWidth / (adjust * 4)) * (2 / 5) + adjust2}
                rx="9"
                ry="9"
                width="100%"
                height={(screenWidth / (adjust * 4)) * 3}
            />
            <Rect
                x="0"
                y={
                    (screenWidth / (adjust * 4)) * (2 / 5) +
                    (screenWidth / (adjust * 4)) * 3 +
                    adjust2 * 2
                }
                rx="4"
                ry="4"
                width="100%"
                height={(screenWidth / (adjust * 4)) * (1 / 5)}
            />
            <Rect
                x="0"
                y={
                    (screenWidth / (adjust * 4)) * (2 / 5) +
                    (screenWidth / (adjust * 4)) * 3 +
                    (screenWidth / (adjust * 4)) * (1 / 5) +
                    adjust2 * 3
                }
                rx="4"
                ry="4"
                width="100%"
                height={(screenWidth / (adjust * 4)) * (1 / 5)}
            />
            <Rect
                x="0"
                y={
                    (screenWidth / (adjust * 4)) * (2 / 5) +
                    (screenWidth / (adjust * 4)) * 3 +
                    (screenWidth / (adjust * 4)) * (1 / 5) +
                    (screenWidth / (adjust * 4)) * (1 / 5) +
                    adjust2 * 4
                }
                rx="4"
                ry="4"
                width="100%"
                height={(screenWidth / (adjust * 4)) * (1 / 5)}
            />
        </Svg>
    );

    const [MaskedElement_1, setMask] = useState(getMaskedElement_1);
    useEffect(() => {
        setMask(getMaskedElement_1);
    }, []);
    return (
        <View style={styles().container_1}>
            <ContentLoader
                MaskedElement={MaskedElement_1}
                forColorOpacity={0.8}
                //'https://images.unsplash.com/photo-1623732293823-2ffceeebc978?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                backgroundImage={{
                    // uri: 'https://cdn.wallpapersafari.com/12/62/BQJnG6.jpg',
                    uri: 'https://www.mahindraecolecentrale.edu.in/photos/shares/Blog-Images/MEC-to-MU.jpg',
                }}
            />
        </View>
    );
};

export default LoadingScreen;
