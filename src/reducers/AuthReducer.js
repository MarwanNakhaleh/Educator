const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false };
import {
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAILED,
    LOGIN_USER
} from '../actions/types';

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case EMAIL_CHANGED:
            // take everything in the existing state and give it a new payload cause if you just return action.payload, it won't think the state changed cause it's still pointing to the same object
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, email: '', password: '', loading: false, error: '' };
        case LOGIN_USER_FAILED:
            return { ...state, error: "Authentication failed", password: '', loading: false }
        default:
            return state;
    }
}