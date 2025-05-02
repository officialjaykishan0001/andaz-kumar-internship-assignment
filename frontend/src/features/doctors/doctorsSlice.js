import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDoctors } from './doctorsAPI';

export const getDoctors = createAsyncThunk(
  'doctors/getDoctors',
  async (filters, thunkAPI) => {
    const data = await fetchDoctors(filters);
    return data;
  }
);

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState: {
    data: [],
    loading: false,
    error: null,
    total: 0
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDoctors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.doctors;
        state.total = action.payload.total;
      })
      .addCase(getDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default doctorsSlice.reducer;
