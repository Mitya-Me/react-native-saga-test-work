import React from 'react'
import {  StyleSheet, ScrollView } from 'react-native'

import EmployeeListItem from '../components/EmployeeListItem'

const EmployeesListScreen = () => { 
	const testArr = ['Andrey', 'Valera', 'Aleksandr', 'Petya', 'Nikolay', 'Tatyana']
	return (
		<ScrollView style={styles.list}> 
			{testArr.map(empl => <EmployeeListItem text={empl}/>)}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	list: {
		paddingHorizontal: 10,
		paddingVertical: 15
	}
});


export default EmployeesListScreen; 