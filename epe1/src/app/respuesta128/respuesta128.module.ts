import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Respuesta128Page } from './respuesta128.page';

const routes: Routes = [
  {
    path: '',
    component: Respuesta128Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Respuesta128Page]
})
export class Respuesta128PageModule {}
