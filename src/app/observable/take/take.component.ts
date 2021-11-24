import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, timer } from 'rxjs';
import { take, takeLast, takeUntil } from 'rxjs/operators';
import { DesignUtilitesService } from '../../../AppServies/design-utilites.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css'],
})
export class TakeComponent implements OnInit {
  constructor(private _du: DesignUtilitesService) {}
  randomNames = [
    'Anup',
    'Shankar',
    'Sharma',
    'Uxtrends',
    'John',
    'Alex',
    'Robert',
  ];
  ngOnInit() {
    //Ex-01 take
    const nameSource = from(this.randomNames);
    nameSource
      .pipe(take(5))
      .subscribe((res) => this._du.print(res, 'elContainer'));
    //Ex-02
    nameSource
      .pipe(takeLast(5))
      .subscribe((res) => this._du.print(res, 'elContainer2'));
    //Ex-03
    const source = interval(1000);
    let condition1 = timer(5000);
    let condition2 = fromEvent(document, 'click');
    source
      .pipe(
        map((res) => 'Number ' + res),
        takeUntil(condition2)
      )
      .subscribe((res) => this._du.print(res, 'elContainer3'));
  }
}
