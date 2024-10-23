import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';
import { UsuarioDialogComponent } from '../components/usuario-dialog/usuario-dialog.component';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component'; // Importar ConfirmDialogComponent
import { CapitalizarPipe } from '../pipes/capital.pipe';
import { CustomSlicePipe } from '../pipes/slice.pipe';
import { AddGmailPipe } from '../pipes/add-gmail.pipe';


@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    CapitalizarPipe,
    CustomSlicePipe,
    AddGmailPipe,
  ],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  nuevoUsuario: Usuario = { id: 0, nombre: '', email: '', edad: 0 }; 
  displayedColumns: string[] = ['id', 'nombre', 'email', 'edad', 'acciones']; 

  constructor(private usuarioService: UsuarioService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.usuarioService.obtenerUsuarios().subscribe(
      (data: Usuario[]) => {
        this.usuarios = data;
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }

  agregarUsuario(): void {
    if (this.nuevoUsuario.nombre && this.nuevoUsuario.email && this.nuevoUsuario.edad > 0) {
      this.usuarioService.crearUsuario(this.nuevoUsuario).subscribe(
        () => {
          this.obtenerUsuarios();
          this.nuevoUsuario = { id: 0, nombre: '', email: '', edad: 0 }; // Reiniciar el valor de edad
        },
        (error) => {
          console.error('Error al agregar el usuario:', error);
        }
      );
    }
  }
  

  eliminarUsuario(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: '¿Estás seguro de que deseas eliminar este usuario?' }
    });

    dialogRef.afterClosed().subscribe((confirmado: boolean) => {
      if (confirmado) {
        this.usuarioService.eliminarUsuario(id).subscribe(
          () => {
            this.obtenerUsuarios();
          },
          (error) => {
            console.error('Error al eliminar el usuario:', error);
          }
        );
      }
    });
  }

  abrirDialogoModificar(usuario: Usuario): void {
    const dialogRef = this.dialog.open(UsuarioDialogComponent, {
      width: '250px',
      data: { ...usuario }
    });

    dialogRef.afterClosed().subscribe((resultado: Usuario | undefined) => {
      if (resultado) {
        this.usuarioService.actualizarUsuario(resultado.id, resultado).subscribe(
          () => {
            this.obtenerUsuarios();
          },
          (error) => {
            console.error('Error al actualizar el usuario:', error);
          }
        );
      }
    });
  }
}
