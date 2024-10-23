import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addGmail',
  standalone: true
})
export class AddGmailPipe implements PipeTransform {
  transform(value: string): string {
    // Verificar si el valor ya tiene un dominio de correo
    if (!value.includes('@')) {
      return `${value}@gmail.com`;
    }
    // Si ya tiene un dominio, devolver el valor original
    return value;
  }
}
