import { createSlice } from '@reduxjs/toolkit';

export const breedSlice = createSlice({
    name: 'breed',
    initialState: {
        currentBreed: undefined,
        breedsList: [],
        currentSubBreed: undefined,
        images: [],
    },
    reducers: {
        setCurrentBreed: (state, action) => {
            state.currentBreed = action.payload;
            state.currentSubBreed = undefined;
        },
        setBreedsList: (state, action) => {
            state.breedsList = action.payload;
        },
        setCurrentSubBreed: (state, action) => {
            state.currentSubBreed = action.payload;
        },
        setImages: (state, action) => {
            state.images = action.payload;
        }
    },
});

export const { setCurrentBreed, setBreedsList, setCurrentSubBreed, setImages } = breedSlice.actions;

export default breedSlice.reducer;