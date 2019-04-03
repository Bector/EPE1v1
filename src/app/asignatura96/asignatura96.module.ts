import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Asignatura96Page } from './asignatura96.page';

const routes: Routes = [
  {
    path: '',
    component: Asignatura96Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Asignatura96Page]
})
export class Asignatura96PageModule {}
