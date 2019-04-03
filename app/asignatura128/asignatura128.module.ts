import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Asignatura128Page } from './asignatura128.page';

const routes: Routes = [
  {
    path: '',
    component: Asignatura128Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Asignatura128Page]
})
export class Asignatura128PageModule {}
