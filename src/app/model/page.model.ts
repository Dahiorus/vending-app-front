import { Entity } from './entity.model';

export type Page<T extends Entity> = Entity & {
  _embedded: {
    elements: T[];
  };
  page: PageInfo;
};

export type PageInfo = {
  size: Number;
  totalElements: Number;
  totalPages: Number;
  number: Number;
};
