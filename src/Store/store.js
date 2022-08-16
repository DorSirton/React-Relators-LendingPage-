import { configureStore } from '@reduxjs/toolkit'
import gallerySlice from './Reducers/gallerySlice'

export default configureStore({
  reducer: {
    gallerySlice:gallerySlice
  },
})