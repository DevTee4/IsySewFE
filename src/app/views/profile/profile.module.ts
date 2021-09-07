import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/share/share.module';
import { SlideshowModule } from 'ng-simple-slideshow';
import { ProfileComponent } from './profile.component';



export const appRoutes: Routes = [
  { path: "", component: ProfileComponent },
  { path: "profile", component: ProfileComponent },
];
@NgModule({
  declarations: [ProfileComponent],
  imports: [
  RouterModule.forChild(appRoutes), 
  CommonModule,
  SharedModule,
  SlideshowModule
  ],
  exports: [],
})
export class ProfileModule { }
