import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?:number): string {
    let l=(limit)? limit:50;

    return value.substring(0,l).concat('....');
  }

}
