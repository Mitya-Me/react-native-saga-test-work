import React, { useState } from 'react'
import { TextInput, Text, View, StyleSheet } from 'react-native'
import colors from '../styles/colors'

const CustomInput = ({ label, placeholder, value, onChangeText }) => {
	return (
		<>
			<Text> {label} </Text>
			<TextInput
				value={value}
				onChangeText={onChangeText}
				placeholder={placeholder}
				style={styles.input} />
		</>
	)
}

const styles = StyleSheet.create({
	input: {
		margin: 0,
		padding: 5,
		borderBottomColor: colors.border,
		borderBottomWidth: 2,
		marginBottom: 15,
	}
})




export default CustomInput;