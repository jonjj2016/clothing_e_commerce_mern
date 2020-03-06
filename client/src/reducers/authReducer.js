import * as Types from '../actions/sagaTypes';
const initState = {
    token: localStorage.getItem('token'),
    user: null,
    isAuthenticated: false,
    loading: true,
    error: null

}
const authReducer = (state = initState, action) => {
    switch (action.type) {
        //REGISTER USER LOGIC
        case Types.REGISTER_SUCCESS:
            //in case register succeed
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }
        case Types.REGISTER_FAILURE:
            //in case register failed
            return {
                ...state,
                loading: false,
                token: null,
                user: null,
                isAuthenticated: false,
                error: action.payload
            }
            //LOGIN USER LOGIC
            //in casse login user succeed
        case Types.LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }
        case Types.LOGIN_FAILURE:
            //in case login failed
            return {
                ...state,
                loading: false,
                token: null,
                user: null,
                isAuthenticated: false,
                error: action.payload
            }
        case Types.USER_LOADED:
            return {
                ...state,
                user: action.payload.user,
                isAuthenticated: true,
                loading: false
            }
        case Types.USER_LOADED_FAILED:
            //in case loading user failed

            return {
                ...state,
                loading: false,
                token: null,
                user: null,
                isAuthenticated: false,
                error: action.payload
            }
            //LOG OUT USER 
        case Types.LOG_OUT_USER:
            return {

                loading: false,
                token: null,
                user: null,
                isAuthenticated: false,
                error: null
            }
        default:
            return state;
    }
};
export default authReducer