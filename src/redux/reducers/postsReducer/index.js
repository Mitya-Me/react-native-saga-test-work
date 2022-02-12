import { FETCH_POSTS, FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS } from "./actions";

const initialPostsState = {
	uploadData: false,
	data: null,
	error: false
}

export default function postsReducer(state = initialPostsState, action) { 
	switch (action.type) {
		case FETCH_POSTS: {
			return {
				...state,
				uploadData: false
			}
		}
		case FETCH_POSTS_SUCCESS: { 
			return {
				uploadData: true,
				data: action.payload,
				error: false
			}
		}
		case FETCH_POSTS_FAILURE: { 
			return {
				...state,
				uploadData: false,
				error: action.payload,
			}
		}
		default:
			return state;
	}
}