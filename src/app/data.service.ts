import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  url = 'https://jsonplaceholder.typicode.com/todos';
  tasks = [];
  addTask(task)
  {
    console.log(task);
    this.tasks.push(task);
  }
  getTasks()
{
  return this.tasks;
}
getData():Observable<any>
{
  return this._http.get(this.url).pipe(map(data=>
    {
      const tempData:any = data;
      console.log(tempData);
      return from(tempData);
    }))
}


}
