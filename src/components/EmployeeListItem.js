import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'
import colors from '../styles/colors'

const EmployeeListItem = ({text}) => {
	return (
		<TouchableOpacity style={styles.wrapper}>
			<Text style={styles.text}>{ text }</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		paddingHorizontal: 10,
		paddingVertical: 15,
		borderColor: colors.border,
		borderWidth: 2,
		marginBottom: 10
	},
	text: {
		fontWeight: 'bold',
		fontSize: 16
	}
})

export default EmployeeListItem;