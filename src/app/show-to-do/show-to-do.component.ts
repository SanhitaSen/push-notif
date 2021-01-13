import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  selector: 'app-show-to-do',
  templateUrl: './show-to-do.component.html',
  styleUrls: ['./show-to-do.component.scss']
})
export class ShowToDoComponent implements OnInit {

  constructor(private _service: DataService) { }
  allTasks = [];
  ngOnInit(): void {
    this.allTasks = this._service.getTasks();

    //Get 5 data from API
    this._service.getData()
    .subscribe(result=>
      {
        result.pipe(take(5))
        .subscribe(val =>
          {
            console.log(val);
          })
      })
  }

}
