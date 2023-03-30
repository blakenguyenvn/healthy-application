import { faker } from '@faker-js/faker';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Body Weight',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Body Fat',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

interface BodyChartDataType {
  labels: any;
  datasets: { label: string; data: any; borderColor: string; backgroundColor: string }[];
}

export function fetchBodyChartData() {
  return new Promise<{ data: BodyChartDataType }>((resolve) =>
    setTimeout(() => resolve({ data }), 500),
  );
}
