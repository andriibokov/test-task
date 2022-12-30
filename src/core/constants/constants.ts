export const baseDate = new Date('2022-01-01');

export const formatDate = (date: Date) => date.toISOString().split('T')[0];

export const dataSample = {
  start: '2022-01-01',
  end: '2022-01-03',
  color: 'red',
};

export enum colors {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

export enum colorToClassName {
  red = 'bg-red-300 text-red-900',
  green = 'bg-green-300 text-green-900',
  blue = 'bg-blue-300 text-blue-900',
};