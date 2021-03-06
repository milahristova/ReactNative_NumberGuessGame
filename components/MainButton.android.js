import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

import Colors from '../constants/colors';

const MainButton = props => {
    let ButtonComponent = TouchableOpacity;

    if (Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.ButtonContainer}>
            <ButtonComponent activeOpacity={0.5} onPress={props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{props.children}</Text>
                </View>
            </ButtonComponent>
        </View>
        
    )
}

const styles = StyleSheet.create({
    ButtonContainer: {
        borderRadius: 25,
        overflow: 'hidden'
    },
    button: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 26,
        paddingVertical: 10,
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18,
        textTransform: 'uppercase'
    }
});

export default MainButton;