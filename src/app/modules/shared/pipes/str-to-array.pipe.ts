import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strtoarray'
})
export class StrToArrayPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string[] {
    const start = args[0] ?? 0;
    const end = args[1] ?? value.length;
    let str = value.substring(start, end);
    return Array.from(str);
  }

}
