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
  }

  list: any = [
    {
      route: 'fromEvent',
      name: 'FromEvent',
    },
    {
      route: 'interval',
      name: 'Interval',
    },
    {
      route: 'of-form',
      name: 'OF and Form',
    },
    {
      route: 'to-array',
      name: 'To-Array',
    },
    {
      route: 'custom',
      name: 'Custom',
    },
    {
      route: 'map',
      name: 'Map',
    },
    {
      route: 'pluck',
      name: 'Pluck',
    },
    {
      route: 'filter',
      name: 'Filter',
    },
    {
      route: 'tap',
      name: 'Tap',
    },
    {
      route: 'take',
      name: 'Take',
    },
    {
      route: 'retry',
      name: 'Retry',
    },
    {
      route: 'debounceTime',
      name: 'DebounceTime',
    },
    {
      route: 'subject',
      name: 'Subject',
    },
  ];
}
