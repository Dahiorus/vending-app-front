import { Entity, Links } from './entity.model';

export class Page<T extends Entity> implements Entity {
  constructor(
    public readonly _embedded: {
      readonly elements: T[];
    },
    public readonly _links: Links,
    public readonly page: PageInfo,
  ) {}

  get elements(): T[] {
    return this._embedded.elements;
  }

  get links() {
    return this._links;
  }
}

export interface PageInfo {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}
