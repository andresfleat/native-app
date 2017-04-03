import {NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {NativeScriptModule} from 'nativescript-angular/nativescript.module';
import {NSModuleFactoryLoader} from 'nativescript-angular/router';
import {NativeScriptFormsModule} from 'nativescript-angular/forms';

import {AppRouterModule} from './app-router.module';
import {AppComponent} from './app.component';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    ReactiveFormsModule,
    AppRouterModule
  ],
  declarations: [
    AppComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [
    {
      provide: NgModuleFactoryLoader, 
      useClass: NSModuleFactoryLoader
    }
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
