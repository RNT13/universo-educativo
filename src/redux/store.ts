import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import searchSlice from './slices/searchSlice'

const rootReducer = combineReducers({
  search: searchSlice,
  [apiSlice.reducerPath]: apiSlice.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
