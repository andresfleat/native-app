import {NgModule} from '@angular/core';

import {RegisterRouterModule} from './register-router.module';

@NgModule({
  imports: [RegisterRouterModule],
  exports: [RegisterRouterModule]
})

export class RegisterModule {}
