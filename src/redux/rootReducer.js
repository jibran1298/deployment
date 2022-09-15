import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './features/auth/auth.reducer'
import tripReducer from './features/trip/trip.reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  trip: tripReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'trip'],
}

export default persistReducer(persistConfig, rootReducer)
