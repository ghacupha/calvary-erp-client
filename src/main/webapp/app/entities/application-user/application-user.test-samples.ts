import dayjs from 'dayjs/esm';

import { IApplicationUser, NewApplicationUser } from './application-user.model';

export const sampleWithRequiredData: IApplicationUser = {
  id: 23926,
  username: 'ha partially',
};

export const sampleWithPartialData: IApplicationUser = {
  id: 32144,
  username: 'searchingly extra-large',
  imageUrl: 'platter wherever slump',
  resetDate: dayjs('2024-09-30T07:20'),
};

export const sampleWithFullData: IApplicationUser = {
  id: 2722,
  username: 'geez',
  firstName: 'Georgianna',
  lastName: 'Schroeder',
  email: 'Leola.Turcotte@hotmail.com',
  activated: true,
  langKey: 'dimly',
  imageUrl: 'unless ownership',
  activationKey: 'tough',
  resetKey: 'colour sorrowful dimly',
  resetDate: dayjs('2024-09-29T15:58'),
};

export const sampleWithNewData: NewApplicationUser = {
  username: 'than boo',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
