import { apply, call, takeLatest, put } from "redux-saga/effects";
import { FETCH_POSTS, FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS } from "../../reducers/postsReducer/actions";
import { BASE_URL } from "../../../constants/api/baseUrl"
import { Alert } from 'react-native'

export function* loadPosts() { 
	try {
		const request = yield call(fetch, BASE_URL)
		const data = yield apply(request, request.json)

		yield put({type: FETCH_POSTS_SUCCESS, payload: data})
	}
	catch (e) { 
		yield put({
			type: FETCH_POSTS_FAILURE,
			payload: e.message
		})
		Alert.alert(e.message)
	}
} 

export default function* postsSaga() { 
	yield takeLatest(FETCH_POSTS, loadPosts)
}

