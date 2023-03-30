import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { fetchMealHistoryData, MealItemType } from './mealHistoryAPI';

export interface MealHistoryState {
  data: MealItemType[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: MealHistoryState = {
  data: [],
  status: 'idle',
};

export const fetchMealHistoryAsync = createAsyncThunk(
  'mealHistory/fetchMealHistoryData',
  async () => {
    const response = await fetchMealHistoryData();
    return response.data;
  },
);

export const mealHistorySlice = createSlice({
  name: 'mealHistory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMealHistoryAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMealHistoryAsync.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchMealHistoryAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectMealHistoryData = (state: RootState) => state.mealHistory?.data;

export default mealHistorySlice.reducer;
