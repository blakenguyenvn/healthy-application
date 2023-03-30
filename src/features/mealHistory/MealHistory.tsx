import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import MealCard from 'components/MealCard';
import { fetchMealHistoryAsync, selectMealHistoryData } from './mealHistorySlice';

const MealHistoryWrapper = styled(Grid)`
  padding: 48px 0 24px;
`;

const MealHistoryBottom = styled.div`
  text-align: center;
  padding: 0 0 24px;
`;

const LoadMoreButton = styled(Button)`
  background: linear-gradient(32.95deg, #ffcc21 8.75%, #ff963c 86.64%);
  min-width: 200px;
  color: #fff;
`;

export default function MealHistory() {
  const data = useAppSelector(selectMealHistoryData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMealHistoryAsync());
  }, []);

  const MealGrid = data.map((mealItem) => {
    return (
      <Grid key={mealItem.id} item xs={6}>
        <MealCard image={mealItem.image} label={mealItem.label} />
      </Grid>
    );
  });

  return (
    <>
      <MealHistoryWrapper container spacing={2} columns={24}>
        {MealGrid}
      </MealHistoryWrapper>
      <MealHistoryBottom>
        <LoadMoreButton>{'記録をもっと見る'}</LoadMoreButton>
      </MealHistoryBottom>
    </>
  );
}
