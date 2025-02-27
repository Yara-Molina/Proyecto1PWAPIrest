import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioBusquedaComponent } from './components/usuario-busqueda/usuario-busqueda.component';
import { NgModule } from '@angular/core';
import { Router } from 'express';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: UsuariosComponent },
  { path: 'busqueda', component: UsuarioBusquedaComponent }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class appRoutes{}
