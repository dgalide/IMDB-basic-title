import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isAdult'
})
export class IsAdultPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value === 1 ? 'Adult Only' : 'All Public';
  }

}
