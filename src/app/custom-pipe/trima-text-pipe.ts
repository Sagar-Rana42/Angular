import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimaText',
})
export class TrimaTextPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.substring(0,10);
  }

}
