import { configureStore } from '@reduxjs/toolkit'
import { usersReducer } from './slices/login'

const store = configureStore({
    reducer: {
        users: usersReducer,
    },
})

export default store