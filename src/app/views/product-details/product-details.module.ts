import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbSearchModule, NbSidebarModule } from '@nebular/theme';
import { ProductDetailsComponent } from './product-details.component';
import { SharedModule } from 'src/app/share/share.module';
import { StarRatingModule } from 'angular-star-rating';
import { ProductModule } from 'src/app/share/product/product.module';

export const appRoutes: Routes = [
    { path: "", component: ProductDetailsComponent },
    { path: "product-details", component: ProductDetailsComponent },
];
@NgModule({
    declarations: [ProductDetailsComponent],
    imports: [
        RouterModule.forChild(appRoutes),
         CommonModule,
         SharedModule,
         StarRatingModule.forRoot(),
         ProductModule
    ],
    exports: []
})
export class ProductDetailsModule { }