import { Entity } from '../model/entity.model';
import { ItemType } from './item.model';

export interface VendingMachine extends Entity {
  readonly id: string;
  serialNumber: string;
  address: Address;
  lastIntervention: string;
  temperature: Number;
  type: ItemType;
  powerStatus: PowerStatus;
  workingStatus: WorkingStatus;
  rfidStatus: CardSystemStatus;
  smartCardStatus: CardSystemStatus;
  changeMoneyStatus: ChangeSystemStatus;
  price: Number;
}

export interface Address {
  latitude: Number;
  longitude: Number;
  place: string;
  streetAddress: string;
}

export enum PowerStatus {
  ON,
  OFF,
}

export enum WorkingStatus {
  OK,
  WARNING,
  ERROR,
  ALERT,
}

export enum CardSystemStatus {
  ERROR,
  NORMAL,
}

export enum ChangeSystemStatus {
  FULL,
  EMPTY,
  NORMAL,
}
