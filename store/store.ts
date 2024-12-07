import { configureStore, combineReducers } from "@reduxjs/toolkit"

import AuthReducers from "./auth/authReducers"

// Combine reducers if you have multiple
const rootReducer = combineReducers({
  auth: AuthReducers,
})

const store = configureStore({
  reducer: rootReducer, // Add your reducers here
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
