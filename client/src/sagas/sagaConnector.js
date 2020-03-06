import {
    takeLatest
} from 'redux-saga/effects'
import * as Sagas from './authSagas';
import * as reduxTypes from '../actions/types'

function* sagaConnector() {
    yield takeLatest(reduxTypes.REGISTER, Sagas.registerUserSaga)
    yield takeLatest(reduxTypes.LOGIN, Sagas.loginUserSaga)
    yield takeLatest(reduxTypes.LOADUSER, Sagas.loadUserSaga)
    yield takeLatest(reduxTypes.LOGOUTUSER, Sagas.logoutUserSaga)
}
export default sagaConnector