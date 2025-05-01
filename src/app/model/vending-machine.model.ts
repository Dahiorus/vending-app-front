import { Entity } from '../model/entity.model';
import { ItemType } from './item.model';

export type VendingMachine = Entity & {
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
};

export type Address = {
  latitude: Number;
  longitude: Number;
  place: string;
  streetAddress: string;
};

export enum PowerStatus {
  ON = 'ON',
  OFF = 'OFF',
}

export enum WorkingStatus {
  OK = 'OK',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  ALERT = 'ALERT',
}

export enum CardSystemStatus {
  ERROR = 'ERROR',
  NORMAL = 'NORMAL',
}

export enum ChangeSystemStatus {
  FULL = 'FULL',
  EMPTY = 'EMPTY',
  NORMAL = 'NORMAL',
}
