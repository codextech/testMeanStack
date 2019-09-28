import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { RouterModule } from '@angular/router';
import { DashboardSharedUIModule } from 'src/app/dashboard/shared-ui/dashboard-shared-ui.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
DashboardSharedUIModule
  ],
  declarations: [DashboardLayoutComponent]
})
export class DashboardLayoutModule { }
