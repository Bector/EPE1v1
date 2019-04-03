import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'acerca', loadChildren: './acerca/acerca.module#AcercaPageModule' },
  { path: 'asignatura32', loadChildren: './asignatura32/asignatura32.module#Asignatura32PageModule' },
  { path: 'asignatura64', loadChildren: './asignatura64/asignatura64.module#Asignatura64PageModule' },
  { path: 'asignatura96', loadChildren: './asignatura96/asignatura96.module#Asignatura96PageModule' },
  { path: 'asignatura128', loadChildren: './asignatura128/asignatura128.module#Asignatura128PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
