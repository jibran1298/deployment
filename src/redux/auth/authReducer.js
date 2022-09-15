import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../services/api'

const userLogin = createAsyncThunk(
  'users/fetchByIdStatus',
  async (thunkAPI) => {
    const response = await api.useLoginQuery()
    return response.data
  }
)

const initialState = {
  accessToken: '',
  userDetails: {},
  data: {},
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addAccessToken: (state, action) => {
      state.accessToken += action.payload
    },
    addUserDetails: (state, action) => {
      state.userDetails += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.data = action.payload
    })
  },
})

// Action creators are generated for each case reducer function
export const { addAccessToken, addUserDetails } = auth.actions

export default auth.reducer
