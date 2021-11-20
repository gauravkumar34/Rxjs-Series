import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilitesService } from '../../../AppServies/design-utilites.service';

@Component({
  selector: 'app-of-form',
  templateUrl: './of-form.component.html',
  styleUrls: ['./of-form.component.css'],
})
export class OfFormComponent implements OnInit {
  constructor(private _designUl: DesignUtilitesService) {}
  ObsMsg: any;
  ngOnInit(): void {
    const Obs1 = of('Anup', 'Shekar', 'Sharma');
    Obs1.subscribe((res) => {
      this._designUl.print(res, 'idContainer');
    });

    const Obs2 = of({ a: 'Anup', b: 'Shekar', c: 'Sharma' });
    Obs2.subscribe((res) => {
      this.ObsMsg = res;
      console.log(this.ObsMsg);
    });

    //from
    const Obs3 = from(['Anup', 'Shekar', 'Sharma']);
    Obs3.subscribe((res) => {
      this._designUl.print(res, 'idContainer3');
    });

    //from -Promise
    const promise = new Promise((res) => {
      setTimeout(() => {
        res('Promise resolve');
      }, 3000);
    });
    const Obs4 = from(promise);
    Obs4.subscribe((res) => {
      this._designUl.print(res, 'idContainer4');
    });
    //from -String
    const Obs5 = from('Welcome to my page');
    Obs5.subscribe((res) => {
      this._designUl.print(res, 'idContainer5');
    });
  }
}
