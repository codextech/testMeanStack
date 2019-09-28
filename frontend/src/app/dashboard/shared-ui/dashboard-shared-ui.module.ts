import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,

    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        SidebarComponent
    ],

})
export class DashboardSharedUIModule { }
