/* eslint-disable @typescript-eslint/no-explicit-any */
import { Item } from '../types/types';
import { colors, baseDate, formatDate } from '../constants/constants';

const range = (n: number, fn: (n: number) => Item) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(fn(i + 1));
  }
  return result;
};

const chooseRandomly = (items: colors[]) => {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
};

const addDays = (date: Date, amount: number) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + amount);
  return newDate;
};

export const items: Item[] = range(40,(index): Item => ({
    date: formatDate(addDays(baseDate, index)),
    color: chooseRandomly(Object.values(colors)),
  }),
);
