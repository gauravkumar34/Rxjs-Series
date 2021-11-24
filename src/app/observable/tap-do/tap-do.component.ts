import { Component, OnInit } from '@angular/core';
import { from, interval, map } from 'rxjs';
import { DesignUtilitesService } from '../../../AppServies/design-utilites.service';

@Component({
  selector: 'app-tap-do',
  templateUrl: './tap-do.component.html',
  styleUrls: ['./tap-do.component.css'],
})
export class TapDoComponent implements OnInit {
  constructor(private _du:DesignUtilitesService) {}

  ngOnInit() {
    const arr = ['Gaurav', 'Saurav', 'Sonu', 'Mom', 'Rajveer', 'Ridhi'];

    const source = interval(1500);

    source.pipe(map((res) => arr[res])).subscribe((res) => {
      this._du.print(res ,'elContainer')
    });
  }
}
