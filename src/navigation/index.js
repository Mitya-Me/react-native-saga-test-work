import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import CustomStackNavigator from './CustomStackNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { privateStackScreens, publicStackScreens } from './stackScreens';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const Navigation = () => {
	const { uploadData } = useSelector(state => state.posts)
	const { availabilityAuth, userData } = useSelector(state => state.auth)

	return (
		<NavigationContainer>
			{availabilityAuth && uploadData
				? <CustomStackNavigator
					initialRouteName='PostsList'
					userName={userData.login}
					screens={privateStackScreens.map(({ name, component }) => (
					<Stack.Screen key={name} name={name} component={component}/>
				))}
				/>
				: <CustomStackNavigator
				screens={publicStackScreens.map(({ name, component }) => (
					<Stack.Screen key={name} name={name} component={component}/>
				))}
				/>
			} 
		</NavigationContainer>
	)
}

export default Navigation
