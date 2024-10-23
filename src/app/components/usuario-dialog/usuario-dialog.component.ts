import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from '../../models/usuario';
import { MatDialogModule } from '@angular/material/dialog'; // Módulo de diálogo
import { MatFormFieldModule } from '@angular/material/form-field'; // Módulo de campo de formulario
import { MatInputModule } from '@angular/material/input'; // Módulo de input
import { FormsModule } from '@angular/forms'; // Importa el módulo de formularios

@Component({
  selector: 'app-usuario-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule], // Importar módulos necesarios
  templateUrl: './usuario-dialog.component.html',
  styleUrls: ['./usuario-dialog.component.scss']
})
export class UsuarioDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UsuarioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario
  ) {}

  onNoClick(): void {
    this.dialogRef.close(); // Cierra el diálogo
  }

  onUpdate(): void {
    this.dialogRef.close(this.data); // Cierra el diálogo y devuelve los datos actualizados
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
