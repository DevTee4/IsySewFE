import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbSearchModule, NbSidebarModule } from '@nebular/theme';
import { ClassDetailsComponent } from './class-details.component';

export const appRoutes: Routes = [
    { path: "", component: ClassDetailsComponent },
    { path: "class-details", component: ClassDetailsComponent },
];
@NgModule({
    declarations: [ClassDetailsComponent],
    imports: [
        RouterModule.forChild(appRoutes), CommonModule
    ],
    exports: []
})
export class ClassDetailsModule { }