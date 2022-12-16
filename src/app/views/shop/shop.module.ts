import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbSearchModule, NbSidebarModule } from '@nebular/theme';
import { SharedModule } from 'src/app/share/share.module';
import { ProductModule } from 'src/app/share/product/product.module';

export const appRoutes: Routes = [
  { path: "", component: ShopComponent },
  { path: "shop", component: ShopComponent },
];
@NgModule({
  declarations: [ShopComponent],
  imports: [
    NbSidebarModule,
    SharedModule,
  RouterModule.forChild(appRoutes), CommonModule,
  ProductModule
  ],
  exports: []
})
export class ShopModule { }
