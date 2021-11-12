import { configureStore } from '@reduxjs/toolkit'

import { munityMiddleware, munityReducer } from 'munityapps/store';


/********************************
 * Custom reducers and middleware
********************************/

// munityReducer[storeKey] = reducer;

// munityMiddleware.push(middleware);

/********************************
 * Custom reducers and middleware
********************************/

const store = configureStore({
    reducer: munityReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(munityMiddleware)
    })

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch