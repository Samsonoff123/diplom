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
        items: false,
        status: 'loading',
    }
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logout: (state) => {
            state.items = false
        },
        updateProgress: (state, action) => {
            console.log(action);
            state.items.user.progress = action.payload
        }
    },
    extraReducers: {
        [fetchUser.pending] : (state)=>{
            state.items = false
            state.status = 'loading'
        },
        [fetchUser.fulfilled] : (state, action)=>{
            state.items = action.payload
            state.status = 'loaded'
        },
        [fetchUser.rejected] : (state)=>{
            state.items = false
            state.status = 'error'
        },
    }
})

export const usersReducer = userSlice.reducer

export const { logout, updateProgress } = userSlice.actions