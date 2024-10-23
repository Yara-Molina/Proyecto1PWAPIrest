import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-usuario-busqueda',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule 
  ],
  templateUrl: './usuario-busqueda.component.html',
  styleUrls: ['./usuario-busqueda.component.scss']
})
export class UsuarioBusquedaComponent {
  usuarioId: number | null = null;
  usuarioEncontrado: Usuario | null = null;
  error: string | null = null;

  constructor(private usuarioService: UsuarioService) {}

  buscarUsuarioPorId(): void {
    if (this.usuarioId !== null) {
      this.usuarioService.obtenerUsuarioPorId(this.usuarioId).subscribe(
        (usuario) => {
          this.usuarioEncontrado = usuario;
          this.error = null;
        },
        (err) => {
          this.error = 'Usuario no encontrado';
          this.usuarioEncontrado = null;
        }
      );
    }
  }
}
