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

import dayjs from 'dayjs/esm';

import { IEntitySubscription, NewEntitySubscription } from './entity-subscription.model';

export const sampleWithRequiredData: IEntitySubscription = {
  id: 3481,
  subscriptionToken: '2587f784-676a-4542-a856-209674fd2c56',
  startDate: dayjs('2024-10-01T05:17'),
  endDate: dayjs('2024-09-30T22:16'),
};

export const sampleWithPartialData: IEntitySubscription = {
  id: 389,
  subscriptionToken: '08f18c20-117a-4147-9daf-46cd29836623',
  startDate: dayjs('2024-10-01T04:05'),
  endDate: dayjs('2024-10-01T07:05'),
};

export const sampleWithFullData: IEntitySubscription = {
  id: 25112,
  subscriptionToken: 'c018bce4-fa34-4da3-9044-45f5c714a5ef',
  startDate: dayjs('2024-10-01T02:49'),
  endDate: dayjs('2024-10-01T08:15'),
};

export const sampleWithNewData: NewEntitySubscription = {
  subscriptionToken: 'c0c5f182-d97e-40a2-8e33-ee1dcf85b059',
  startDate: dayjs('2024-10-01T04:03'),
  endDate: dayjs('2024-09-30T23:14'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
