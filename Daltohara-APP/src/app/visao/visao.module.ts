import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisaoPageRoutingModule } from './visao-routing.module';

import { VisaoPage } from './visao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisaoPageRoutingModule
  ],
  declarations: [VisaoPage]
})
export class VisaoPageModule {}
