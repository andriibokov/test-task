import { colors } from "../constants/constants";

export interface Item {
  date: string;
  color: colors;
}

export interface Range {
  start: string;
  end: string;
  color: colors;
}
