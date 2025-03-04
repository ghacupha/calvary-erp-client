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

import { Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';

/**
 * These routes lead to similar entities as the ones in the entities folder
 * though these consist mostly of extensions and custom code
 */
export const erpExtensionRoutes: Routes = [
  {
    path: 'account',
    data: {
      pageTitle: 'Registry',
      authorities: ['ROLE_ADMIN'],
    },
    canActivate: [UserRouteAccessService],
    loadChildren: () => import('./registration/erp-registration.routes'),
  },
];
