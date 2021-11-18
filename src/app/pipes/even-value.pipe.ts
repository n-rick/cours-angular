import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenValue'
})
export class EvenValuePipe implements PipeTransform {

  transform(tableau: number[], ...args: unknown[]): number[] {
    return tableau.filter(elt => elt % 2 == 0);
  }
}
