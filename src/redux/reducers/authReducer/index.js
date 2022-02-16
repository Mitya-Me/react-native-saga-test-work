import {  AUTH_AVAILABILITY_FAILED, AUTH_LOAD, AUTH_LOGIN, AUTH_LOGOUT} from "./actions"

const initialAuthState = {
	userData: {
		login: null,
		password: null,
	},
	availabilityAuth: false,
}

export default function authReducer(state = initialAuthState, action) { 
	switch (action.type) { 
		case AUTH_LOAD: {
			return {
				...state,
				userData: action.payload,
			}
		}
		case AUTH_LOGIN: {
			return {
				...state,
				availabilityAuth: true,
			}
		}
		case AUTH_AVAILABILITY_FAILED: {
			return {
				...state,
				availabilityAuth: false,
			}
		}
		case AUTH_LOGOUT: { 
			return {
				...state,
				userData: {
					login: null,
					password: null,
				},
				availabilityAuth: false
			}
		}
		default: 
			return state;
	}
}