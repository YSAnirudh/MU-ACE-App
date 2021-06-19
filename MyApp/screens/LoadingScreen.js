import React, {useState, useEffect} from 'react';
import {styles, theme} from '../constants/Styles';
import {View} from 'react-native';

import Svg, {Rect, Circle} from 'react-native-svg';
import ContentLoader from 'react-native-masked-loader';
import {screenHeight, screenWidth} from '../utils/ScreenParams';
import {ThemeProvider} from '@react-navigation/native';

const LoadingScreen = () => {
    const adjust = 2;
    const adjust2 = 4;
    //console.log(theme().background)
    const getMaskedElement_1 = (
        <Svg height="100%" width="100%" fill={'green'}>
            <Rect x="0" y="30" rx="9" ry="9" width="100%" height="90%" />
        </Svg>
    );

    const [MaskedElement_1, setMask] = useState(getMaskedElement_1);
    useEffect(() => {
        setMask(getMaskedElement_1);
    }, []);
    if (theme().background == '#121212') {
        return (
            <View style={styles().container_1}>
                <ContentLoader
                    MaskedElement={MaskedElement_1}
                    forColorOpacity={0.8}
                    //'https://images.unsplash.com/photo-1623732293823-2ffceeebc978?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                    backgroundImage={{
                        // uri: 'https://cdn.wallpapersafari.com/12/62/BQJnG6.jpg',
                        //uri: 'https://i.imgur.com/9Mg2CHf.png',
                        uri: 'https://i.imgur.com/nWhJQqX.png',
                    }}
                />
            </View>
        );
    } else {
        return (
            <View style={styles().container_1}>
                <ContentLoader
                    MaskedElement={MaskedElement_1}
                    forColorOpacity={0.8}
                    //'https://images.unsplash.com/photo-1623732293823-2ffceeebc978?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                    backgroundImage={{
                        // uri: 'https://cdn.wallpapersafari.com/12/62/BQJnG6.jpg',
                        uri: 'https://i.imgur.com/BoKOhp8.png',
                        //uri:'https://i.imgur.com/nWhJQqX.png'
                    }}
                />
            </View>
        );
    }
};

export default LoadingScreen;
