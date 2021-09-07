import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbSearchModule, NbSidebarModule } from '@nebular/theme';
import { ProductDetailsComponent } from './product-details.component';

export const appRoutes: Routes = [
    { path: "", component: ProductDetailsComponent },
    { path: "product-details", component: ProductDetailsComponent },
];
@NgModule({
    declarations: [ProductDetailsComponent],
    imports: [
        RouterModule.forChild(appRoutes), CommonModule
    ],
    exports: []
})
export class ProductDetailsModule { }