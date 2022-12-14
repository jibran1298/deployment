import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const middlewares = [thunk]
export const store = createStore(rootReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store)
