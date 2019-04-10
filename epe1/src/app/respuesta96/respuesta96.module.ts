import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Respuesta96Page } from './respuesta96.page';

const routes: Routes = [
  {
    path: '',
    component: Respuesta96Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Respuesta96Page]
})
export class Respuesta96PageModule {}
