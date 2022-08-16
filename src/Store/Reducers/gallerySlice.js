import { createSlice } from '@reduxjs/toolkit'

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    gallery: [],
  },
  reducers: {
    Update: (state,action) => {
     
    },
    Dele: (state,action) => {
        state.gallery = state.gallery.filter(item => item.id != action.payload)

    },
    Save: (state, action) => {
        state.gallery = action.payload;
    },
  },
})

export const { Update,Save,Dele} = gallerySlice.actions

export default gallerySlice.reducer