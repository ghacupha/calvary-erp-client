import { IInstitution, NewInstitution } from './institution.model';

export const sampleWithRequiredData: IInstitution = {
  id: 11017,
  name: 'gaseous',
};

export const sampleWithPartialData: IInstitution = {
  id: 28613,
  name: 'concerning plus',
};

export const sampleWithFullData: IInstitution = {
  id: 7533,
  name: 'meh separately',
};

export const sampleWithNewData: NewInstitution = {
  name: 'as',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
