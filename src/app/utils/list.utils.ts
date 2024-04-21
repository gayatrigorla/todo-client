import { List } from "../model/list"

export const isMainList = (list: List): boolean => {
  return 'items' in list;
}
