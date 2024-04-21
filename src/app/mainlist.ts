import { List } from "./list";
import { Sublist } from "./sublist";

export interface Mainlist extends List {
  items: Sublist[];
}
