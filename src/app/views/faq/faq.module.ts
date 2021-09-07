import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbSearchModule, NbSidebarModule } from '@nebular/theme';
import { FAQComponent } from './faq.component';

export const appRoutes: Routes = [
    { path: "", component: FAQComponent },
    { path: "faq", component: FAQComponent },
];
@NgModule({
    declarations: [FAQComponent],
    imports: [
        RouterModule.forChild(appRoutes), CommonModule
    ],
    exports: []
})
export class FAQModule { }