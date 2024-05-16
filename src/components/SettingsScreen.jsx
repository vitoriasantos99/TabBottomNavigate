import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default props => {
    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
            }}>
            <Text>Settings</Text>
            <Icon name="settings" size={50} color="#000"/>
        </View>
    )
}