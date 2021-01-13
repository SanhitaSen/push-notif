import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-review';
  private readonly publicKey = 'BGhx1o-G_jjVLjWmSxdlYjGRrCPq46pUclijaqn_Gch2cmDyAccUs-L9kCXOzJIp-YCisYKXzoUZqmd6HME3miE';
  constructor(private swpush : SwPush)
  {

  }

  ngOnInit()
  {
    this.pushSubscription();
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
      })
      .catch((err) => console.log(err));
  }
}
