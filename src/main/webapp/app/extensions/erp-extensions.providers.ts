///
/// Erp System - Mark I No 2 (Beniah Series) Client 0.0.1-SNAPSHOT
/// Copyright © 2021 - 2025 Edwin Njeru (mailnjeru@gmail.com)
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

// erp-extensions.module.ts
import { ApplicationUserService } from 'app/entities/application-user/service/application-user.service';
import { EntitySubscriptionService } from 'app/entities/entity-subscription/service/entity-subscription.service';
import { ERPApplicationUserService } from './registration/application-user/service/application-user.service';
import { ERPEntitySubscriptionService } from './registration/entity-subscription/service/entity-subscription.service';
import { ERPInstitutionService } from './registration/institution/service/institution.service';
import { InstitutionService } from 'app/entities/institution/service/institution.service';
import { Provider } from '@angular/core';

/**
 * Extensions for components that have been extended in the extensions
 * folder
 */
export const erpExtensionProviders: Provider[] = [
  // Import the tokens/services you need to override
  { provide: ApplicationUserService, useClass: ERPApplicationUserService },
  { provide: EntitySubscriptionService, useClass: ERPEntitySubscriptionService },
  { provide: InstitutionService, useClass: ERPInstitutionService },
];
