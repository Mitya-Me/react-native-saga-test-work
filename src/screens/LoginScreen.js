import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ScrollView, useWindowDimensions } from 'react-native'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import colors from '../styles/colors'
import CustomText from '../components/CustomText'
import { useNavigation } from '@react-navigation/native'
import { FETCH_POSTS } from '../redux/reducers/postsReducer/actions'
import { useDispatch, useSelector } from 'react-redux'
import {loginGreetings} from '../constants/text/loginGreetings'
import { AUTH_LOAD } from '../redux/reducers/authReducer/actions'

const LoginScreen = () => { 
	const { height } = useWindowDimensions()
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const { availabilityAuth } = useSelector(state => state.auth)
	
	const [loginValue, setLoginValue] = useState();
	const [passwordValue, setPasswordValue] = useState();

	useEffect(() => { 
		if (loginValue?.length > 1 && passwordValue?.length > 1) {
			dispatch({
				type: AUTH_LOAD,
				payload: {login: loginValue, password: passwordValue}
			})
		} 
	}, [loginValue, passwordValue])

	
	const onEnterPressed = () => { 
		dispatch({ type: FETCH_POSTS })
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
					color={colors.textGray}
					text={loginGreetings}
				/>
			</View>
			<CustomInput
				onChangeText={setLoginValue}
				placeholder='Login'
				value={loginValue}
				label='Login'
			/>			
			<CustomInput
				onChangeText={setPasswordValue}
				placeholder='Password'
				value={passwordValue}
				label='Password'
			/>
			<CustomButton onPress={onEnterPressed} dis={!availabilityAuth} text='Enter' bRadius={5}/>
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