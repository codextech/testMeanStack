import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header/home-header.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule

    ],
    declarations: [
        HomeHeaderComponent,
    ],
    exports: [
      HomeHeaderComponent,
    ],

})
export class HomeSharedUIModule { }
