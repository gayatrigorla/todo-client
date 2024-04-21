import { List } from "./list";

export interface Sublist extends List {
  rank: number;
  isCompleted: boolean;
}
