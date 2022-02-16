import { put, takeLatest } from 'redux-saga/effects'
import { Alert } from 'react-native'
import { AUTH_LOAD, AUTH_LOGIN } from '../../reducers/authReducer/actions'


function* authUser() {
	try {
		yield put({type: AUTH_LOGIN})
	}
	catch (e) {
		yield put({
			type: AUTH_AVAILABILITY_FAILED
		})
		Alert.alert(e.message)
	}
}

export default function* authSaga() { 
	yield takeLatest(AUTH_LOAD, authUser)
}












