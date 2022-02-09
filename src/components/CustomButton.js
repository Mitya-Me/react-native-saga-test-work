import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'
import colors from '../styles/colors'

const CustomButton = ({ onPress, text, width, bRadius, type='prime', dis }) => {
	return (
		<Pressable
			onPress={onPress}
			disabled={dis}
			style={[
				styles.wrapper,
				styles[dis ? `wrapper_disabled` : `wrapper_${type}`],
				{
					width: width ? width : '75%',
					borderRadius: bRadius ? bRadius : 0,
				}
			]}>
			<Text style={styles[dis ? `text_disabled` : `text_${type}`]}>
				{text}
			</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		padding: 10,
		alignItems: 'center',
		alignSelf: 'center',
		borderWidth: 1
	},
	wrapper_prime: {
		borderColor: colors.btnBorder,
		backgroundColor: colors.btnBg
	},
	wrapper_secondary: {
		borderColor: colors.btnSeconaryBorder,
		backgroundColor: colors.btnSeconaryBg
	},
	wrapper_disabled: {
		borderColor: colors.btnDisabledBorder,
		backgroundColor: colors.btnDisabledBg
	},
	text_prime: {
		color: colors.btnText
	},
	text_secondary: {
		color: colors.btnSeconaryText
	},
	text_disabled: {
		color: colors.btnDisabledText
	}
})


export default CustomButton;