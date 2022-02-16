import React from 'react'
import CustomText from '../components/CustomText'
import colors from '../styles/colors'
import IconUser from '../assets/images/icons/user.svg'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator();

const CustomStackNavigator = ({ userName, screens, initialRouteName = 'Login' }) => {
	return (
		<Stack.Navigator
			initialRouteName={initialRouteName}
			screenOptions={{
				headerStyle: { backgroundColor: colors.primary },
				headerTitleStyle: { fontSize: 16, fontWeight: 'normal' },
				headerTintColor: 'white',
				headerRight: () => (
					userName ?
						<>
							<CustomText
								text={userName}
								color={colors.textWhite} padH={10} />
							<IconUser width={24} height={24} fill='white' />
						</>
						: null
				),
			}}
		>
			{screens}
		</Stack.Navigator>
	)
}

export default CustomStackNavigator;

