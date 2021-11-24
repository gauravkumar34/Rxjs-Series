import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription, tap } from 'rxjs';
import { DesignUtilitesService } from '../../../AppServies/design-utilites.service';

@Component({
  selector: 'app-tap-do',
  templateUrl: './tap-do.component.html',
  styleUrls: ['./tap-do.component.css'],
})
export class TapDoComponent implements OnInit {
  constructor(private _du: DesignUtilitesService) {}
  mycolor: any;
  ngOnInit() {
    //ex-01
    const arr = ['Gaurav', 'Saurav', 'Sonu', 'Mom', 'Rajveer', 'Ridhi'];
    let obsS: Subscription;
    const source = interval(1500);

    obsS = source
      .pipe(
        tap((res) => {
          if (res > 8) obsS.unsubscribe();
        }),
        map((res) => arr[res])
      )
      .subscribe((res) => {
        this._du.print(res, 'elContainer');
      });

    //ex-02
    const arr2 = ['red', 'yellow', 'blue', 'orange', 'green', 'black'];
    let obsS2: Subscription;
    const source2 = interval(1500);

    obsS2 = source2
      .pipe(
        tap((res) => {
          this.mycolor = arr2[res];
          console.log(this.mycolor);
          if (res == 6) obsS2.unsubscribe();
        }),
        map((res) => arr2[res])
      )
      .subscribe((res) => {
        this._du.print(res, 'elContainer2');
      });
  }
}
