import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbSearchModule, NbSidebarModule } from '@nebular/theme';
import { CartComponent } from './cart.component';

export const appRoutes: Routes = [
    { path: "", component: CartComponent },
    { path: "cart", component: CartComponent },
];
@NgModule({
    declarations: [CartComponent],
    imports: [
        RouterModule.forChild(appRoutes), CommonModule
    ],
    exports: []
})
export class CartModule { }