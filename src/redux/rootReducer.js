import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './features/auth/auth.reducer'

const rootReducer = combineReducers({
    auth: authReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
}

export default persistReducer(persistConfig, rootReducer)