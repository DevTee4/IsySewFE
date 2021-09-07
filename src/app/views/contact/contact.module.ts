import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/share/share.module';
import { SlideshowModule } from 'ng-simple-slideshow';
import { ContactComponent } from './contact.component';



export const appRoutes: Routes = [
  { path: "", component: ContactComponent },
  { path: "contact", component: ContactComponent },
];
@NgModule({
  declarations: [ContactComponent],
  imports: [
  RouterModule.forChild(appRoutes), 
  CommonModule,
  SharedModule,
  SlideshowModule
  ],
  exports: [],
})
export class ContactModule { }
