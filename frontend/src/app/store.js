import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from '../features/doctors/doctorsSlice';

export const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
  },
});
