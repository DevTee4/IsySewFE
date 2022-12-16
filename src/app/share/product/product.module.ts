import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/share/share.module';
import { SlideshowModule } from 'ng-simple-slideshow';
import { ProductComponent } from './product.component';
import { StarRatingModule } from 'angular-star-rating';



// export const appRoutes: Routes = [
//   { path: "", component: ContactComponent },
//   { path: "contact", component: ContactComponent },
// ];
@NgModule({
  declarations: [ProductComponent],
  imports: [
  // RouterModule.forChild(appRoutes), 
  CommonModule,
  SharedModule,
  SlideshowModule,
           StarRatingModule.forRoot()

  ],
  exports: [ProductComponent],
})
export class ProductModule { }
