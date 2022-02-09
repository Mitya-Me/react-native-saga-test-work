import LoginScreen from '../screens/LoginScreen'
import EmployeeScreen from '../screens/EmployeeScreen'
import EmployeesListScreen from '../screens/EmployeesListScreen'

export const publicStackScreens = [
	{ name: 'Login', component: LoginScreen },
]

export const privateStackScreens = [
	{ name: 'Employee', component: EmployeeScreen },
	{ name: 'EmployeeList', component: EmployeesListScreen },
]

