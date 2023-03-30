interface AchievementType {
  rate: number;
  date: string;
}
export function fetchAchievement() {
  return new Promise<{ data: AchievementType }>((resolve) =>
    setTimeout(() => resolve({ data: { rate: 75, date: '03/23' } }), 500),
  );
}
