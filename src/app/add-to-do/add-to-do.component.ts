import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwPush } from '@angular/service-worker';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss']
})
export class AddToDoComponent implements OnInit {
  private readonly publicKey = 'BJkUsZs9QYXvusPKt-2SJ_LZD8Y6L3HHEJjP9rVNaiBgjOCr5aLyGMGGJelLMi4eh-2M7SyRbQPZvEok1iYtTuA';
  constructor(private _fb: FormBuilder, private _service: DataService, private swpush : SwPush, private http: HttpClient) { }

  temp:string;
  ngOnInit(): void {
  }
  task:FormGroup = this._fb.group({
    myTask : ['', [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)]]
  })

  onSubmit()
  {
    console.log(this.task.value);
    this._service.addTask(this.task.value);
    this.task.reset();

  }
  pushSubscription() {
    if (!this.swpush.isEnabled) {
      console.log('Notification is not enabled');
      return;
    }
    
    this.swpush
      .requestSubscription({
        serverPublicKey: this.publicKey,
      })
      .then((sub) => {
        // Make a post call to serve
        console.log(JSON.stringify(sub));
        this.temp = JSON.stringify(sub);
      })
      .catch((err) => console.log(err));
      this.http.post('http://localhost:3000',JSON.parse(this.temp)).subscribe((res)=>{
       console.log(res);
    });
  }
}
