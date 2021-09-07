import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NbInputModule, NbFormFieldModule } from '@nebular/theme';
import { CreateAccountComponent } from './create-account.component';



export const appRoutes: Routes = [
  { path: "", component: CreateAccountComponent },
  { path: "create-account", component: CreateAccountComponent },
];

@NgModule({
  declarations: [CreateAccountComponent],
  imports: [
  NbInputModule,
    NbFormFieldModule,
    RouterModule.forChild(appRoutes), 
    CommonModule
  ],
  exports:[]
})
export class CreateAccountModule { }
