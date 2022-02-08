import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'
import colors from '../styles/colors'

const CustomButton = ({text, bg, fg}) => { 
	return (
		<Pressable
			style={styles.wrapper}>
			<Text
				style={styles.text}>
				{text}
			</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		padding: 10,
		width: '75%',
		borderRadius: 5,
		backgroundColor: colors.primary,
		color: 'white',
		alignItems: 'center',
		alignSelf: 'center'
	},
	text: {
		color: colors.textWhite,
	}
})


export default CustomButton;