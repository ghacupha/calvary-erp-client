import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '51cd14dd-41d5-4877-837d-2ae5709e8c1d',
};

export const sampleWithPartialData: IAuthority = {
  name: '263688c2-fb93-493f-831f-2aff5292b20a',
};

export const sampleWithFullData: IAuthority = {
  name: '5ad79519-6ef3-4189-b048-10519acbbd1e',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
