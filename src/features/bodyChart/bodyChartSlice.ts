import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { fetchBodyChartData } from './bodyChartAPI';

export interface BodyChartState {
  data: any;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: BodyChartState = {
  data: {
    labels: [],
    datasets: [],
  },
  status: 'idle',
};

export const fetchBodyChartAsync = createAsyncThunk('bodyChart/fetchBodyChartData', async () => {
  const response = await fetchBodyChartData();
  return response.data;
});

export const bodyChartSlice = createSlice({
  name: 'bodyChart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBodyChartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBodyChartAsync.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchBodyChartAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectBodyChartData = (state: RootState) => state.bodyChart?.data;

export default bodyChartSlice.reducer;
