import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/share/share.module';
import { SlideshowModule } from 'ng-simple-slideshow';
import { TrainingComponent } from './training.component';



export const appRoutes: Routes = [
  { path: "", component: TrainingComponent },
  { path: "training", component: TrainingComponent },
];
@NgModule({
  declarations: [TrainingComponent],
  imports: [
  RouterModule.forChild(appRoutes), 
  CommonModule,
  SharedModule,
  SlideshowModule
  ],
  exports: [],
})
export class TrainingModule { }
