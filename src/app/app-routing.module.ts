// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioBusquedaComponent } from './components/usuario-busqueda/usuario-busqueda.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: UsuariosComponent },
  { path: 'busqueda', component: UsuarioBusquedaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
