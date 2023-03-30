import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { fetchAchievement } from './achievementAPI';

export interface AchievementState {
  rate: number;
  date: string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: AchievementState = {
  rate: 0,
  date: '03/23',
  status: 'idle',
};

export const fetchAchievementAsync = createAsyncThunk('achievement/fetchAchievement', async () => {
  const response = await fetchAchievement();
  return response.data;
});

export const achievementSlice = createSlice({
  name: 'achievement',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAchievementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAchievementAsync.fulfilled, (state, action) => {
        state.rate = action.payload?.rate;
        state.date = action.payload?.date;
        state.status = 'idle';
      })
      .addCase(fetchAchievementAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectRate = (state: RootState) => state.achievement?.rate;
export const selectDate = (state: RootState) => state.achievement?.date;

export default achievementSlice.reducer;
