import { all, spawn } from 'redux-saga/effects'
import postsSaga from './postsSaga'
import authSaga from './authSaga';

export default function* rootSaga() { 
	const sagas = [postsSaga, authSaga];

	yield all(sagas.map(saga => spawn(saga)))
}