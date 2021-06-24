import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../reducers/appSlice';
import breedReducer from '../reducers/breedSlice';

export default configureStore({
    reducer: {
        app: appReducer,
        breed: breedReducer,
    },
});