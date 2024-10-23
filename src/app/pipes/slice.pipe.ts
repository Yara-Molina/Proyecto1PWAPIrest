import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSlice',
  standalone: true
})
export class CustomSlicePipe implements PipeTransform {
  transform(value: any, start: number, end?: number): any {
    if (!value) {
      return value;
    }

    // Verifica si el valor es una cadena
    if (typeof value === 'string') {
      return value.slice(start, end);
    }

    // Verifica si el valor es un arreglo
    if (Array.isArray(value)) {
      return value.slice(start, end);
    }

    // Si el valor no es ni cadena ni arreglo, retorna el valor original
    return value;
  }
}
