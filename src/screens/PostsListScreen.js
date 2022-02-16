import React from 'react'
import {  StyleSheet, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

import PostsListItem from '../components/PostsListItem'

const PostsListScreen = () => { 
	const posts = useSelector(state => state.posts.data)

	return (
		<ScrollView style={styles.list}> 
			{posts.map(post => <PostsListItem post={post}/>)}
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