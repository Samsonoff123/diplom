import { configureStore } from '@reduxjs/toolkit'
import { usersReducer } from './slices/devices'

const store = configureStore({
    reducer: {
        users: usersReducer,
    },
})

export default store