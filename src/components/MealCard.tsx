import React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const MealCardWrapper = styled(Card)`
  position: relative;
  border-radius: 0;
  width: 100%;
  height: 100%;
  border: none;
  box-shadow: none;
`;

const MealCardContent = styled(CardContent)`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  z-index: 1;
  padding: 8px;
  background: #ffcc21;
  color: #fff;

  &:last-child {
    padding-bottom: 8px;
  }
`;

interface MealCardProp {
  image: string;
  label: string;
}
export default function MealCard(props: MealCardProp) {
  const { image, label } = props;

  return (
    <MealCardWrapper>
      <CardMedia component='img' height='100%' image={image} />
      <MealCardContent>{label}</MealCardContent>
    </MealCardWrapper>
  );
}
