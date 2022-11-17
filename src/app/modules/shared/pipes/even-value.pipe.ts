import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenvalue'
})
export class EvenValuePipe implements PipeTransform {

  transform(value: number[], ...args: unknown[]): number[] {
    let resultat: number[] = [];
    for (let i = 0; i < value.length; i++) {
      if (value[i] % 2 == 0) {
        resultat.push(value[i])
      }
    }
    return resultat;
  }

}
