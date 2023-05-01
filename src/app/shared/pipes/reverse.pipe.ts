import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let revesreValue = value;

    if (revesreValue === "") 
        return "";
  
  else
    return this.transform(revesreValue.substr(1)) + revesreValue.charAt(0);

  }

}
