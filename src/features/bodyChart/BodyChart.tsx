import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import LineChart from 'components/LineChart';
import { fetchBodyChartAsync, selectBodyChartData } from './bodyChartSlice';

export default function BodyChart() {
  const data = useAppSelector(selectBodyChartData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBodyChartAsync());
  }, []);

  return <LineChart data={data}></LineChart>;
}
