import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.list;
    console.log(this.list);
  }

  list: any = [
    {
      id: 1,
      route: 'fromEvent',
      name: 'FromEvent',
    },
    {
      id: 2,
      route: 'interval',
      name: 'Interval',
    },
    {
      id: 3,
      route: 'of-form',
      name: 'OF-Form',
    },
  ];
}
