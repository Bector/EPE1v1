import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'asignatura32', loadChildren: './asignatura32/asignatura32.module#Asignatura32PageModule' },
  { path: 'asignatura64', loadChildren: './asignatura64/asignatura64.module#Asignatura64PageModule' },
  { path: 'asignatura96', loadChildren: './asignatura96/asignatura96.module#Asignatura96PageModule' },
  { path: 'asignatura128', loadChildren: './asignatura128/asignatura128.module#Asignatura128PageModule' },
  { path: 'acerca', loadChildren: './acerca/acerca.module#AcercaPageModule' },
  { path: 'respuesta/:epe1/:epe2/:epe3/:eva1/:eva2', loadChildren: './respuesta/respuesta.module#RespuestaPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
<<<<<<< HEAD
  { path: 'respuesta128/:epe1/:epe2/:epe3/:epe4/:eva1/:eva2/:eva3/:eva4', loadChildren: './respuesta128/respuesta128.module#Respuesta128PageModule' },

=======
  { path: 'respuesta64/:epe1/:epe2/:epe3/:eva1/:eva2/:eva3', loadChildren: './respuesta64/respuesta64.module#Respuesta64PageModule' },  { path: 'respuesta96', loadChildren: './respuesta96/respuesta96.module#Respuesta96PageModule' },

>>>>>>> f6f43b9acb84fb491fd812e462b5a23c52e66a77


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
