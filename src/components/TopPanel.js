import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import colors from '../styles/colors'

const TopPanel = ({auth}) => {
	return (
		<View style={styles.topPanel}>
			{auth ? 
				<View style={styles.topPanelUserText}>
					<Text style={styles.text}> List </Text>
					<Text style={styles.text}> UserName </Text>
				</View>	
				: <Text style={styles.text}> Login to personal account </Text>}
		</View>
	)
}

const styles = StyleSheet.create({
	topPanel: {
		backgroundColor: colors.primary,
		padding: 20,
		
	},
	topPanelUserText: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	text: {
		color: colors.textWhite,
		fontSize: 15
	}
})

export default TopPanel
