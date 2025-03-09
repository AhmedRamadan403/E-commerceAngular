import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArray'
})
export class SearchArrayPipe implements PipeTransform {

  transform(value: any[], SearchText : string): any {
    // value.forEach(o=>{
      
    // })
  }

}
