import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisaoPage } from './visao.page';

const routes: Routes = [
  {
    path: '',
    component: VisaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisaoPageRoutingModule {}
