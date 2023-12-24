export type PageRequest = {
  page: Number;
  size: Number;
  sort: string[];
  [filter: string]: any;
};
