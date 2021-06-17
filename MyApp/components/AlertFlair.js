import React, {useState} from 'react';
import {createPostStyles,styles} from '../constants/Styles';
import {Modal, Text, View, Alert, Pressable} from 'react-native';
import Flairs from './Flairs';
import CreatePostButton from './CreatePostButton';
const AlertFlair = ({alertVisible, alertMessage, setAlertVisible}) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const onSelectedItemsChange = (selectedItems) => {
        // Set Selected Items
        setSelectedItems(selectedItems);
    };
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
                  <Text style={createPostStyles().textFieldTitle}>Options</Text>
                  </View>
                    <Flairs
                        selectedItems={selectedItems}
                                    onSelectedItemsChange={
                                        onSelectedItemsChange
                                    }
                                />
                     <Pressable
                            style={[
                                createPostStyles().button,
                                createPostStyles().buttonClose,
                            ]}
                            onPress={() => setAlertVisible(false)}
                        >
                            <Text style={createPostStyles().textStyle}>Ok</Text>
                        </Pressable>
                       
                    </View>
                    </View> 
            </Modal>
        </View>
    );
};
export default AlertFlair;
