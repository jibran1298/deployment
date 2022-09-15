import { configureStore } from '@reduxjs/toolkit'
import { auth } from './auth/authReducer'

export const store = configureStore({
  reducer: {
    auth: auth,
  },
})
