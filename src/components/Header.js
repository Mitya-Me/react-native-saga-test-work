import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}> Вход в личный кабинет </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ff0000',
        padding: 15
    },
    headerText: {
        color: 'white',
        fontSize: 16
    }
});

export default Header;
