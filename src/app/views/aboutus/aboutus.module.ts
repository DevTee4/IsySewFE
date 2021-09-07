import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/share/share.module';
import { SlideshowModule } from 'ng-simple-slideshow';
import { AboutusComponent } from './aboutus.component';



export const appRoutes: Routes = [
  { path: "", component: AboutusComponent },
  { path: "aboutus", component: AboutusComponent },
];
@NgModule({
  declarations: [AboutusComponent],
  imports: [
  RouterModule.forChild(appRoutes), 
  CommonModule,
  SharedModule,
  SlideshowModule
  ],
  exports: [],
})
export class AboutModule { }
