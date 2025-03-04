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

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApplicationUserDeleteDialogComponent } from '../../../../entities/application-user/delete/application-user-delete-dialog.component';
import SharedModule from 'app/shared/shared.module';

@Component({
  standalone: true,
  templateUrl: './application-user-delete-dialog.component.html',
  imports: [SharedModule, FormsModule, ApplicationUserDeleteDialogComponent],
})
export class ERPApplicationUserDeleteDialogComponent extends ApplicationUserDeleteDialogComponent {}
