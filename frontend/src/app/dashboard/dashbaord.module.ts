import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbaordComponent } from './dashbaord.component';
import { FormsModule } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // NgxSmartModalModule.forChild()
  ],
  declarations: [DashbaordComponent,
  ]
})
export class DashbaordModule { }
