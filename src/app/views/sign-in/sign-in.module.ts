import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in.component';
import { NbFormFieldModule, NbInputModule } from '@nebular/theme';

export const appRoutes: Routes = [
  { path: "", component: SignInComponent },
  { path: "sign-in", component: SignInComponent },
];

@NgModule({
  declarations: [SignInComponent],
  imports: [
    NbInputModule,
    NbFormFieldModule,
    RouterModule.forChild(appRoutes), 
    CommonModule
  ],
  exports:[]
})
export class SignInModule { }
