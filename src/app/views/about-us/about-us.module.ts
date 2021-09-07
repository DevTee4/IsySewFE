import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbSearchModule, NbSidebarModule } from '@nebular/theme';
import { AboutUsComponent } from './about-us.component';

export const appRoutes: Routes = [
    { path: "", component: AboutUsComponent },
    { path: "about-us", component: AboutUsComponent },
];
@NgModule({
    declarations: [AboutUsComponent],
    imports: [
        RouterModule.forChild(appRoutes), CommonModule
    ],
    exports: []
})
export class AboutUsModule { }