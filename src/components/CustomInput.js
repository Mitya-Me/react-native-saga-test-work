import React, { useState } from 'react'
import { TextInput, Text, View, StyleSheet } from 'react-native'
import colors from '../styles/colors'

const CustomInput = ({ label, placeholder }) => {
	return (
		<View style={styles.wrapper}>
			<Text style={styles.label}> {label} </Text>
			<TextInput
				placeholder={placeholder}
				style={styles.input} />
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
	},
	input: {
		margin: 0,
		padding: 5,
		borderBottomColor: colors.border,
		borderBottomWidth: 2,
		marginBottom: 15,
	}
})




export default CustomInput;