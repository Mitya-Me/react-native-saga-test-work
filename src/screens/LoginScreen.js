import React from 'react'
import { View, StyleSheet, ScrollView, useWindowDimensions } from 'react-native'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import colors from '../styles/colors'
import CustomText from '../components/CustomText'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => { 
	const { height } = useWindowDimensions()
	const navigation = useNavigation();

	const auth = true;

	const onEnterPressed = () => { 
		navigation.navigate('EmployeeList')
	}

	return (
		<ScrollView style={styles.login}> 
			<View style={[styles.loginHeader, { maxHeight: height * 0.66 }]}>
				<CustomText
					fz={34}
					fw='bold'
					tAlign='center'
					color={colors.primary}
					padV={15}
					text='👋Hello👋'
				/>
				<CustomText
					tAlign='center'
					color = {colors.textGray}
					text="Xavier is a member of a subspecies of humans known as mutants,
					   who are born with superhuman abilities. He is an exceptionally powerful telepath,
					   who can read and control the minds of others. To both shelter and train mutants from
					   around the world, he runs a private school in the X-Mansion in Salem Center, located
					   in Westchester County, New York."
				/>
			</View>
			<CustomInput label='Login' placeholder='Login'/>			
			<CustomInput label='Password' placeholder='Password' />
			<CustomButton onPress={onEnterPressed} dis={!auth} text='Enter' bRadius={5}/>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	login: {
		flex: 1,
		backgroundColor: colors.bg,
		paddingTop: '15%',
		paddingHorizontal: 15,
	},
	loginHeader: {
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
		color: colors.textGray,
		paddingHorizontal: 30,
		textAlign: 'center'
	}
});


export default LoginScreen; 