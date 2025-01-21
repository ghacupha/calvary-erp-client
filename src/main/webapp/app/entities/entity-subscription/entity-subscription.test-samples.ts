import dayjs from 'dayjs/esm';

import { IEntitySubscription, NewEntitySubscription } from './entity-subscription.model';

export const sampleWithRequiredData: IEntitySubscription = {
  id: 21327,
  subscriptionToken: '1efb7dd8-f7c7-49d2-b2a7-68a96b7c9048',
  startDate: dayjs('2024-10-01T03:24'),
  endDate: dayjs('2024-09-30T16:48'),
};

export const sampleWithPartialData: IEntitySubscription = {
  id: 2812,
  subscriptionToken: '24f564a5-bd68-4e89-9a8e-15a85779f57c',
  startDate: dayjs('2024-09-30T16:40'),
  endDate: dayjs('2024-09-30T15:06'),
};

export const sampleWithFullData: IEntitySubscription = {
  id: 24899,
  subscriptionToken: '7089e231-ac50-4adf-9281-cad679cb3657',
  startDate: dayjs('2024-10-01T07:16'),
  endDate: dayjs('2024-09-30T20:53'),
};

export const sampleWithNewData: NewEntitySubscription = {
  subscriptionToken: '1f8a0f52-c6df-4f54-ad8a-ce995d7abfd0',
  startDate: dayjs('2024-09-30T11:40'),
  endDate: dayjs('2024-10-01T01:39'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
