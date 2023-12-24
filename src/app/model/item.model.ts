import { Entity } from './entity.model';

export type Item = Entity & {
  readonly id: string;
  name: string;
  type: ItemType;
  price: Number;
};

export enum ItemType {
  HOT_BEVERAGE,
  COLD_BAVERAGE,
  FOOD,
}
