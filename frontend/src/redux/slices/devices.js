import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchUser = createAsyncThunk('user/fetchUser', async ({email, password})=>{
    if (email && password) {

        const { data } = await axios.post(`https://diplom-navy.vercel.app/api/user/login`, {
            email,
            password
        })

        return data
    }
})

const initialState = {
    users: {
        items: [],
        status: 'loading',
    }
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducer: {},
    extraReducers: {
        [fetchUser.pending] : (state)=>{
            state.users.items = []
            state.users.status = 'loading'
        },
        [fetchUser.fulfilled] : (state, action)=>{
            state.users.items = action.payload
            state.users.status = 'loaded'
        },
        [fetchUser.rejected] : (state)=>{
            state.users.items = []
            state.users.status = 'error'
        },
    }
})

export const usersReducer = userSlice.reducer