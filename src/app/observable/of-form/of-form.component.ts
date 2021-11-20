import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DesignUtilitesService } from '../../../AppServies/design-utilites.service';

@Component({
  selector: 'app-of-form',
  templateUrl: './of-form.component.html',
  styleUrls: ['./of-form.component.css'],
})
export class OfFormComponent implements OnInit {
  constructor(private _designUl: DesignUtilitesService) {}

  ngOnInit(): void {
    const Obs1 = of('Anup', 'Shekar', 'Sharma');
    Obs1.subscribe((res) => {
      this._designUl.print(res, 'idContainer');
    });
  }
}
