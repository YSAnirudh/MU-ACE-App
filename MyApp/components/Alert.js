import React, { useState } from "react";
import { createPostStyles } from "../constants/Styles";
import { Modal, Text, View, Alert, Pressable } from "react-native";

const AlertStyled = ({ alertVisible, alertMessage }) => {
    const [modalVisible, setModalVisible] = useState(alertVisible);
    return (
        <View style={createPostStyles().centeredView}>
            <Modal
                animationType="alert"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(alertVisible);
                }}
            >
                <View style={createPostStyles().centeredView}>
                    <View style={createPostStyles().modalView}>
                        <Text style={createPostStyles().modalText}>
                            {alertMessage}
                        </Text>
                        <Pressable
                            style={[
                                createPostStyles().button,
                                createPostStyles().buttonClose,
                            ]}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={createPostStyles().textStyle}>Ok</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
export default AlertStyled;
