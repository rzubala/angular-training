import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order',
  pure: false
})
export class OrderPipe implements PipeTransform {

  transform(value: any, prop: string): any {
    if (value.length === 0) {
      return value;
    }

    return value.sort((a, b) => {
      if (a[prop] > b[prop]) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}
