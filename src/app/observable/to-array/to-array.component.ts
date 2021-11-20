import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';
import { take, toArray } from 'rxjs/operators';
import { DesignUtilitesService } from '../../../AppServies/design-utilites.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css'],
})
export class ToArrayComponent implements OnInit {
  constructor(private _designUl: DesignUtilitesService) {}
  users = [
    { name: 'Gaurav', skills: 'Angular' },
    { name: 'Saurav', skills: 'Html, css' },
    { name: 'Rohit', skills: 'JavaScript' },
  ];
  sourceSub: Subscription;
  ngOnInit(): void {
    //Ex-01
    const source = interval(1000);
    this.sourceSub = source.pipe(take(5), toArray()).subscribe((res) => {
      console.log(res);
    });

    //Ex-02
    const source2 = from(this.users);
    source2.pipe(toArray()).subscribe((res) => {
      console.log(res);
      this._designUl.print(res, 'idContainer');
    });

    //Ex-03
    const source3 = of('Anup', 'Shankar', 'Sharma');
    source3.pipe(toArray()).subscribe((res) => {
      console.log(res);
      this._designUl.print(res, 'idContainer1');
    });
  }
}
