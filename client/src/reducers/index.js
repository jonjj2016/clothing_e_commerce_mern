import authReducer from './authReducer'
import {
    combineReducers
} from 'redux'
import {
    cartReducer
} from './cart_reducers';
import {
    shopData
} from './shop_data'
import {
    directoryData
} from './directory_reducers'
import {
    persistReducer
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: "root",
    storage,
    whitelilst: ['cart', "logs"]
}
const rootReducer = combineReducers({
    logs: authReducer,
    cart: cartReducer,
    directory: directoryData,
    shopData
})
export default persistReducer(persistConfig, rootReducer)