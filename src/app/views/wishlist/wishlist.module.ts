import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/share/share.module';
import { SlideshowModule } from 'ng-simple-slideshow';
import { WishlistComponent } from './wishlist.component';



export const appRoutes: Routes = [
  { path: "", component: WishlistComponent },
  { path: "wishlist", component: WishlistComponent },
];
@NgModule({
  declarations: [WishlistComponent],
  imports: [
  RouterModule.forChild(appRoutes), 
  CommonModule,
  SharedModule,
  SlideshowModule
  ],
  exports: [],
})
export class WishlistModule { }
