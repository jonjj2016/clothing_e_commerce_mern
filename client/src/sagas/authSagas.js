import {
    call,
    put
} from 'redux-saga/effects';
import axios from 'axios';
import * as Types from '../actions/sagaTypes'
import setAuthToken from '../utils/setAuthToken'

const loadUser = async(url) => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }
    const res = await axios.get(`/api/v1/auth${url}`)
    return res.data
};


const api = async(data, url) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const res = await axios.post(`/api/v1/auth${url}`, data, config)
        console.log(res)
        return res.data
    }
    //LOADING USER 
export function* loadUserSaga() {
        try {
            const user = yield call(loadUser, '/me')
            yield put({
                type: Types.USER_LOADED,
                payload: user
            })
        } catch (err) {
            yield put({
                type: Types.USER_LOADED_FAILED,
                payload: err.message
            })
        }
    }
    //registering user
export function* registerUserSaga(action) {
    try {
        const res = yield call(api, action.payload, '/signUp')

        yield localStorage.setItem("token", res.token)

        yield put({
            type: Types.REGISTER_SUCCESS,
            payload: res
        })
    } catch (err) {
        yield localStorage.removeItem('token')
        yield put({
            type: Types.REGISTER_FAILURE,
            payload: err.message
        })
    }
    yield loadUserSaga()

};
//LOGGING IN USER

export function* loginUserSaga(action) {
    try {
        const res = yield call(api, action.payload, '/signIn')
        yield localStorage.setItem("token", res.token)

        yield put({
            type: Types.LOGIN_SUCCESS,
            payload: res
        })
    } catch (err) {
        yield localStorage.removeItem('token')
        yield put({
            type: Types.LOGIN_FAILURE,
            payload: err.message
        })
    }
    yield loadUserSaga()

};
export function* logoutUserSaga() {
    yield localStorage.removeItem('token')
    yield put({
        type: Types.LOG_OUT_USER
    })
}