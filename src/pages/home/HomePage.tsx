import React from 'react';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import PageContent from 'components/PageContent';
import Achievement from 'features/achievement/Achievement';
import BodyChart from 'features/bodyChart/BodyChart';
import MealHistory from 'features/mealHistory/MealHistory';
import './HomePage.scss';

const BannerGridWrapper = styled(Grid)`
  height: 312px;
  background: #2e2e2e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function HomePage() {
  return (
    <PageContent>
      <Container disableGutters={true} maxWidth={false} sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} columns={24}>
          <BannerGridWrapper item xs={10}>
            <Achievement />
          </BannerGridWrapper>
          <BannerGridWrapper item xs={14}>
            <BodyChart />
          </BannerGridWrapper>
        </Grid>
      </Container>
      <Container>
        <MealHistory />
      </Container>
    </PageContent>
  );
}

export default HomePage;
