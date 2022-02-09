import React, { useState } from 'react'
import { TextInput, Text, View, StyleSheet } from 'react-native'
import colors from '../styles/colors'

const CustomInput = ({ label, placeholder }) => {
	return (
		<>
			<Text style={styles.label}> {label} </Text>
			<TextInput placeholder={placeholder} style={styles.input} />
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