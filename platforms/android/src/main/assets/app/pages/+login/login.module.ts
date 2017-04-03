import {NgModule} from '@angular/core';

import {LoginRouterModule} from './login-router.module';

@NgModule({
  imports: [LoginRouterModule],
  exports: [LoginRouterModule]
})

export class LoginModule {}
