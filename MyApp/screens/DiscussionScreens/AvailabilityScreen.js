import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import Colors from "../../constants/Colors";
import { availabilityStyles, styles, theme } from "../../constants/Styles";

//import { styles } from "../../constants/DiscussionStyles"
import Status from "../../components/status";

import { RefreshControl, SafeAreaView, ScrollView } from "react-native";

export default function AvailabilityScreen({
    navigation,
    userId,
    isLoading,
    setIsLoading,
}) {
    const wait = (timeout) => {
        return new Promise((resolve) => setTimeout(resolve, timeout));
    };
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    // setIsLoading(false);
    return (
        <ScrollView
            contentContainerStyle={availabilityStyles().scrollView}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <View style={styles().container}>
                {/* // <Image
        //     source={require('../../assets/logo3.png')}
        //     style={styles().backgroundImage}
        // /> */}

                <Status
                    {...navigation}
                    userId={userId}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
            </View>
        </ScrollView>
    );
}
