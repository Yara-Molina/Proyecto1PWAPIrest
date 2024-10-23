import { Component } from '@angular/core';
import { UsuariosComponent } from '../../usuarios/usuarios.component';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [UsuariosComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

}
