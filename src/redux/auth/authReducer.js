import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    accessToken: '',
    userDetails: {}
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
})

// Action creators are generated for each case reducer function
export const { addAccessToken, addUserDetails } = auth.actions

export default auth.reducer