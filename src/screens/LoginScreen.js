import React from 'react'
import { View, Text, KeyboardAvoidingView, StyleSheet, ScrollView, useWindowDimensions } from 'react-native'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import colors from '../styles/colors'

const LoginScreen = () => { 
	const {height} = useWindowDimensions()

	return (
		<ScrollView style={styles.login}> 
			<View style={[styles.loginHeader, {maxHeight: height * 0.66}]}>
				<Text style={styles.loginGreeting}>👋Hello👋 </Text>
				<Text style={styles.loginDescription}>
				 Xavier is a member of a subspecies of humans known as mutants,
					who are born with superhuman abilities. He is an exceptionally powerful telepath,
					who can read and control the minds of others. To both shelter and train mutants from
					around the world, he runs a private school in the X-Mansion in Salem Center, located
					in Westchester County, New York.
				</Text>
			</View>
			<CustomInput label='Login' placeholder='Login'/>			
			<CustomInput label='Password' placeholder='Password' />
			<CustomButton text='Enter'/>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	login: {
		flex: 1,
		backgroundColor: colors.bg,
		padding: 15
	},
	loginHeader: {
		paddingTop: '15%',
		alignItems: 'center',
		overflow: 'hidden',
		paddingBottom: '5%',
	},
	loginGreeting: {
		fontSize: 34,
		fontWeight: 'bold',
		color: colors.primary,
		marginBottom: 15
	},
	loginDescription: {
		color: colors.textLight,
		paddingHorizontal: 30,
		textAlign: 'center'
	}
	

});


export default LoginScreen; 