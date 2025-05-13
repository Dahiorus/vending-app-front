import { Entity } from '@model/entity.model';
import { ItemType } from './item.model';

export interface VendingMachine extends Entity {
  readonly id: string;
  serialNumber: string;
  address: Address;
  lastIntervention: string;
  temperature: number;
  type: ItemType;
  powerStatus: PowerStatus;
  workingStatus: WorkingStatus;
  rfidStatus: CardSystemStatus;
  smartCardStatus: CardSystemStatus;
  changeMoneyStatus: ChangeSystemStatus;
  price: number;
}

export interface Address {
  latitude: number;
  longitude: number;
  place: string;
  streetAddress: string;
}

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
