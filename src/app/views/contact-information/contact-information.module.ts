import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbSearchModule, NbSidebarModule } from '@nebular/theme';
import { ContactInformationComponent } from './contact-information.component';

export const appRoutes: Routes = [
    { path: "", component: ContactInformationComponent },
    { path: "contact-information", component: ContactInformationComponent },
];
@NgModule({
    declarations: [ContactInformationComponent],
    imports: [
        RouterModule.forChild(appRoutes), CommonModule
    ],
    exports: []
})
export class ContactInformationModule { }