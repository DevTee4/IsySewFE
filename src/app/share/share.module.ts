import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ModuleWithProviders } from "@angular/core";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbIconLibraries, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbMenuModule, NbRadioModule, NbSearchModule, NbSelectModule, NbStatusService, NbTabsetModule, NbThemeModule, NbUserModule } from "@nebular/theme";
import { ToastModule } from "./toast-notification";
import { FlexLayoutModule } from '@angular/flex-layout';
import {DropdownModule} from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    // TranslateModule,
    FormsModule,
    HttpClientModule,
    NbMenuModule.forRoot(),
    ToastModule.forRoot(),
    NbDialogModule.forRoot({
      hasBackdrop:true,
      hasScroll:true,
      closeOnBackdropClick:false,
      autoFocus:false
    }),
    NbButtonModule
   
  ],
  exports: [
    FlexLayoutModule,
     ReactiveFormsModule,
     FormsModule,
     NbMenuModule,
     NbLayoutModule,
     NbCardModule,
     NbListModule,
     NbUserModule,
     NbTabsetModule,
     NbActionsModule,
     NbRadioModule,
     NbSelectModule,
     NbListModule,
     NbIconModule,
     NbButtonModule,
     NbSearchModule,
     NbCheckboxModule,
     NbDialogModule,
     NbInputModule,
     ToastModule,


    ButtonModule,
    RippleModule,
     DropdownModule
  ],
  providers: [
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatFormFieldModule,
    // ToastrModule,
    // DatePipe
    // NbStatusService
  ],
})

export class SharedModule {
  // constructor(private iconLibraries: NbIconLibraries) {
  //   this.iconLibraries.registerFontPack('font-awesome', { packClass: 'fab', iconClassPrefix: 'fa' });
  // }
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        // NbStatusService
        // WebRequestService,
        // DataaccessService,
        // {
        //   provide: HTTP_INTERCEPTORS,
        //   useClass: AppInterceptorService,
        //   multi: true,
        // }
      ],
    };
  }
}
