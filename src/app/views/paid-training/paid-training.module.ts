import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbSearchModule, NbSidebarModule } from '@nebular/theme';
import { PaidTrainingComponent } from './paid-training.component';

export const appRoutes: Routes = [
    { path: "", component: PaidTrainingComponent },
    { path: "paid-training", component: PaidTrainingComponent },
];
@NgModule({
    declarations: [PaidTrainingComponent],
    imports: [
        RouterModule.forChild(appRoutes), CommonModule
    ],
    exports: []
})
export class PaidTrainingModule { }