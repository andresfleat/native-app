import {NgModule} from '@angular/core';
import {NativeScriptRouterModule} from 'nativescript-angular/router';
import {Routes} from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: 'app/pages/+products/products.module#ProductsModule'
  // },
  {
    path: '',
    loadChildren: './pages/+login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: './pages/+register/register.module#RegisterModule'
  }
];

@NgModule({
  imports: [
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  exports: [
    NativeScriptRouterModule
  ]
})

export class AppRouterModule {}
