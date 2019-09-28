import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingLayoutComponent } from './landing-layout.component';
import { RouterModule } from '@angular/router';
import { HomeSharedUIModule } from 'src/app/home/shared-ui/home-shared-ui.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeSharedUIModule
  ],
  declarations: [LandingLayoutComponent]
})
export class LandingLayoutModule { }
