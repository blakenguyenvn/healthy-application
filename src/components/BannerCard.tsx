import React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const BannerCardWrapper = styled(Card)`
  position: relative;
  border-radius: 0;
  width: 100%;
  height: 100%;
  border: none;
  box-shadow: none;
`;

const BannerCardContent = styled(CardContent)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

interface BannerCardProp {
  background: any;
  children?: any;
}
export default function BannerCard(props: BannerCardProp) {
  const { background, children } = props;

  return (
    <BannerCardWrapper>
      <CardMedia component='img' height='100%' image={background} />
      <BannerCardContent>{children}</BannerCardContent>
    </BannerCardWrapper>
  );
}
