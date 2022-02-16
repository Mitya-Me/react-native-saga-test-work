import LoginScreen from '../screens/LoginScreen'
import PostScreen from '../screens/PostScreen'
import PostsListScreen from '../screens/PostsListScreen'

export const publicStackScreens = [
	{ name: 'Login', component: LoginScreen },
]

export const privateStackScreens = [
	{ name: 'PostsList', component: PostsListScreen },
	{ name: 'Post', component: PostScreen },
]

