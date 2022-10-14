import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from 'src/app/share/share.module';
import {NbSidebarModule} from '@nebular/theme';
import { BrowserTransferStateModule, platformBrowser } from '@angular/platform-browser';

export const appRoutes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../shop/shop.module').then((m) => m.ShopModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../blog/blog.module').then((m) => m.BlogModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../sign-in/sign-in.module').then((m) => m.SignInModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../contact/contact.module').then((m) => m.ContactModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../create-account/create-account.module').then((m) => m.CreateAccountModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../training/training.module').then((m) => m.TrainingModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../aboutus/aboutus.module').then((m) => m.AboutModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../wishlist/wishlist.module').then((m) => m.WishlistModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../product-details/product-details.module').then((m) => m.ProductDetailsModule),
      },
    ],
  }
];
@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    NbSidebarModule.forRoot(),
    RouterModule.forChild(appRoutes),
    BrowserTransferStateModule,
    CommonModule,
    SharedModule
  ],
  exports: [],
})
export class MainLayoutModule { }
