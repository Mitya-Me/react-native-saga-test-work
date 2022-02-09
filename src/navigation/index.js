import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import CustomStackNavigator from './CustomStackNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { privateStackScreens, publicStackScreens } from './stackScreens';

const Stack = createNativeStackNavigator();

const auth = true;

const Navigation = () => {
	return (
		<NavigationContainer>
			{auth
				? <CustomStackNavigator
				userName='Vasiliy Bedrovich'
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
