import {
    createStore,
    applyMiddleware
} from 'redux';
import {
    composeWithDevTools
} from 'redux-devtools-extension';

import rootReducer from './reducers'
//saga part 
import createSagaMidleWare from 'redux-saga'
import sagaConnector from './sagas/sagaConnector'
//importing redux-persist to cash our store in local storage
import {
    persistStore
} from 'redux-persist'
const sagaMidleware = createSagaMidleWare()

const initState = {};
export const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(sagaMidleware)))
    //persistor
export const persistor = persistStore(store)
sagaMidleware.run(sagaConnector)

export default {
    store,
    persistor
}