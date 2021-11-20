import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilitesService } from '../../../AppServies/design-utilites.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css'],
})
export class IntervalComponent implements OnInit {
  constructor(private _designUl: DesignUtilitesService) {}
  obsMsg;
  videoSubscription: Subscription;
  ngOnInit() {
    // const broadCastVideo = interval(1000);
    //timer(delay, interval)
    const broadCastVideo = timer(5000, 1000);

    this.videoSubscription = broadCastVideo.subscribe((res) => {
      this.obsMsg = 'Video ' + res;
      this._designUl.print(this.obsMsg, 'elContainer');
      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    });
  }
}
