import React, {useState} from 'react';
import {createPostStyles, styles} from '../constants/Styles';
import {Modal, Text, View, Alert, Pressable} from 'react-native';
import Flairs from './Flairs';
import CreatePostButton from './CreatePostButton';
import {margin20} from '../constants/Sizes';
const AlertFlair = ({
    alertVisible,
    alertMessage,
    setAlertVisible,
    selectedItems,
    onSelectedItemsChange,
    typeChange,
    onTypeChange,
}) => {
    return (
        <View style={createPostStyles().centeredView}>
            <Modal
                animationType="alert"
                transparent={true}
                visible={alertVisible}
                onRequestClose={() => {
                    setAlertVisible(false);
                }}
            >
                <View style={createPostStyles().flairAlertBox}>
                    <View style={createPostStyles().flairView}>
                        <View>
                            <Text
                                style={[
                                    createPostStyles().textFieldTitle,
                                    {fontSize: margin20, fontWeight: 'bold'},
                                ]}
                            >
                                Tags
                            </Text>
                        </View>
                        <Flairs
                            selectedItems={selectedItems}
                            onSelectedItemsChange={onSelectedItemsChange}
                            typeChange={typeChange}
                            onTypeChange={onTypeChange}
                        />
                        <Pressable
                            style={[
                                createPostStyles().modalButtonn,
                                createPostStyles().modelBorder,
                                {margin: 10},
                            ]}
                            onPress={() => setAlertVisible(false)}
                        >
                            <Text style={createPostStyles().textStyle}>
                                Save
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
export default AlertFlair;
