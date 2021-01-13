import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value:any): any {
    console.log(value);
    return value.sort((a,b)=>
    {
      // console.log(a)
      if(a.myTask<b.myTask)
        return -1;
      else if (a.myTask>b.myTask)
        return 1;
      return 0;
    })
  }

}
