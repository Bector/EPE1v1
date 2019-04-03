import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Asignatura32Page } from './asignatura32.page';

const routes: Routes = [
  {
    path: '',
    component: Asignatura32Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Asignatura32Page]
})
export class Asignatura32PageModule {}
