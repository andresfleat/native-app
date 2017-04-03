// Angular
import {NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

// NativeScript
import {NativeScriptModule} from 'nativescript-angular/nativescript.module';
import {NSModuleFactoryLoader} from 'nativescript-angular/router';
import {NativeScriptFormsModule} from 'nativescript-angular/forms';
import {NativeScriptHttpModule} from "nativescript-angular/http";

// App
import {AppRouterModule} from './app-router.module';
import {AppComponent} from './app.component';

// Services
import {StorageLogger} from './shared/services/storage-logger.service';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
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
    },

    // Services
    StorageLogger
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
