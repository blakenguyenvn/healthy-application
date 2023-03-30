import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from 'app/hooks';
import { fetchAchievementAsync, selectRate, selectDate } from './achievementSlice';
import PercentageCircle from 'components/PercentageCircle/PercentageCircle';
import BannerCard from 'components/BannerCard';
import styles from './Achievement.module.scss';
import achievementBackground from 'assets/achievement_bg.png';

export default function Achievement() {
  const date = useAppSelector(selectDate);
  const rate = useAppSelector(selectRate);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAchievementAsync());
  }, []);

  return (
    <BannerCard background={achievementBackground}>
      <div className={styles.row}>
        <PercentageCircle percentage={rate} label={date} />
      </div>
    </BannerCard>
  );
}
