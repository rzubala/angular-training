import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    if (value.length === 0) {
      return value;
    }
    const arr = value.split('');
    arr.reverse();
    return arr.join('');
  }

}
