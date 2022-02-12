import React from 'react'
import {  StyleSheet, ScrollView } from 'react-native'

import PostsListItem from '../components/PostsListItem'

const PostsListScreen = () => { 
	const testArr = ['Andrey', 'Valera', 'Aleksandr', 'Petya', 'Nikolay', 'Tatyana']
	return (
		<ScrollView style={styles.list}> 
			{testArr.map(empl => <PostsListItem text={empl}/>)}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	list: {
		paddingHorizontal: 10,
		paddingVertical: 15
	}
});


export default PostsListScreen; 