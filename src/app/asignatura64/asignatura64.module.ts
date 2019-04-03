import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Asignatura64Page } from './asignatura64.page';

const routes: Routes = [
  {
    path: '',
    component: Asignatura64Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Asignatura64Page]
})
export class Asignatura64PageModule {}
