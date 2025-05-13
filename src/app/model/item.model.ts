import { Entity } from './entity.model';

export interface Item extends Entity {
  readonly id: string;
  name: string;
  type: ItemType;
  price: number;
}

export enum ItemType {
  HOT_BEVERAGE,
  COLD_BEVERAGE,
  FOOD,
}
