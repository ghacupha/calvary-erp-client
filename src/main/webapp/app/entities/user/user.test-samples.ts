import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 28065,
  login: '8m@WpTCW\\[zrTdm\\@x\\f4Gt',
};

export const sampleWithPartialData: IUser = {
  id: 32754,
  login: '126.e',
};

export const sampleWithFullData: IUser = {
  id: 25768,
  login: 'N',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
