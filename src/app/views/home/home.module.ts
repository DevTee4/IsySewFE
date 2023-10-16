import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/share/share.module';
import { SlideshowModule } from 'ng-simple-slideshow';
import { ProductModule } from 'src/app/share/product/product.module';
import { StarRatingModule } from 'angular-star-rating';



export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
];
@NgModule({
  declarations: [HomeComponent],
  imports: [
  RouterModule.forChild(appRoutes), 
  CommonModule,
  SharedModule,
  SlideshowModule,
  ProductModule,
           StarRatingModule.forRoot(),

  ],
  exports: [],
})
export class HomeModule { }
