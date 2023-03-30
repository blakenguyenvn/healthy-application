import image from 'assets/meal.png';
export const data = [
  { id: '1', label: '05.21.Morning', image },
  { id: '2', label: '05.21.Lunch', image },
  { id: '3', label: '05.21.Dinner', image },
  { id: '4', label: '05.21.Snack', image },
  { id: '5', label: '05.21.Morning', image },
  { id: '6', label: '05.21.Morning', image },
  { id: '7', label: '05.21.Morning', image },
  { id: '8', label: '05.21.Morning', image },
  { id: '9', label: '05.21.Morning', image },
  { id: '10', label: '05.21.Morning', image },
];

export interface MealItemType {
  id: string;
  label: string;
  image: string;
}

export interface MealHistoryDataType {
  data: MealItemType[];
}

export function fetchMealHistoryData() {
  return new Promise<MealHistoryDataType>((resolve) => setTimeout(() => resolve({ data }), 500));
}
