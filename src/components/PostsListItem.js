import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'
import colors from '../styles/colors'
import { useNavigation } from '@react-navigation/native'


const PostsListItem = ({ post }) => {
	const navigation = useNavigation();
	
	const onPostPressed = () => { 
		navigation.navigate('Post', {post})
	}

	return (
		<TouchableOpacity onPress={onPostPressed} style={styles.wrapper}>
			<Text style={styles.text}>{ post.title }</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		paddingHorizontal: 10,
		paddingVertical: 15,
		borderColor: colors.border,
		borderWidth: 2,
		marginBottom: 10
	},
	text: {
		fontWeight: 'bold',
		fontSize: 16
	}
})

export default PostsListItem;