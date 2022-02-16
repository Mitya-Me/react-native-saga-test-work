import React from 'react'
import { View, StyleSheet } from 'react-native'
import CustomButton from '../components/CustomButton'
import CustomText from '../components/CustomText'
import { useDispatch } from 'react-redux' 
import { AUTH_LOGOUT } from '../redux/reducers/authReducer/actions'
import { useNavigation } from '@react-navigation/native'


const PostScreen = ({ route }) => {
	const dispatch = useDispatch()
	const navigation = useNavigation();
	const { title, description } = route.params.post;

	const onLogOutPressed = () => {
		dispatch({ type: AUTH_LOGOUT });
	}

	const onBackPressed = () => { 
		navigation.navigate('PostsList')
	}
	return (
		<View style={styles.wrapper}>
			<View style={styles.textBlock}>
				<CustomText fz={20} fw='bold' text={title}/>
				<CustomText text={description}/>
			</View>
			<View style={styles.btns}>
				<CustomButton
					onPress={onBackPressed}
					type='secondary'
					text='Back'
					width='50%'
				/>
				<CustomButton
					onPress={onLogOutPressed}
					text='Logout'
					width='50%'
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: 'space-between',
	},
	textBlock: {
		padding: 15	
	},
	btns: {
		flexDirection: 'row',
	}
})

export default PostScreen