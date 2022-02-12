import LoginScreen from '../screens/LoginScreen'
import PostScreen from '../screens/PostScreen'
import PostsListScreen from '../screens/PostsListScreen'

export const publicStackScreens = [
	{ name: 'Login', component: LoginScreen },
]

export const privateStackScreens = [
	{ name: 'Post', component: PostScreen },
	{ name: 'PostList', component: PostsListScreen },
]

