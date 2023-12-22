import { Entity } from './entity.model';

export interface Page<T extends Entity> extends Entity {
  _embedded: {
    elements: T[];
  };
  page: PageInfo;
}

export interface PageInfo {
  size: Number;
  totalElements: Number;
  totalPages: Number;
  number: Number;
}
