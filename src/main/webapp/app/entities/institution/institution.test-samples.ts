///
/// Erp System - Mark I No 2 (Beniah Series) Client 0.0.1-SNAPSHOT
/// Copyright © 2022 - 2025 Edwin Njeru (mailnjeru@gmail.com)
///
/// This program is free software: you can redistribute it and/or modify
/// it under the terms of the GNU General Public License as published by
/// the Free Software Foundation, either version 3 of the License, or
/// (at your option) any later version.
///
/// This program is distributed in the hope that it will be useful,
/// but WITHOUT ANY WARRANTY; without even the implied warranty of
/// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
/// GNU General Public License for more details.
///
/// You should have received a copy of the GNU General Public License
/// along with this program. If not, see <http://www.gnu.org/licenses/>.
///

import { IInstitution, NewInstitution } from './institution.model';

export const sampleWithRequiredData: IInstitution = {
  id: 16732,
  name: 'whoever phooey',
};

export const sampleWithPartialData: IInstitution = {
  id: 3516,
  name: 'beyond until',
};

export const sampleWithFullData: IInstitution = {
  id: 7786,
  name: 'unaccountably jovially independence',
};

export const sampleWithNewData: NewInstitution = {
  name: 'facilitate nervously unnecessarily',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
