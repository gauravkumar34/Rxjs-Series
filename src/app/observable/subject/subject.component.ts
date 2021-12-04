import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilitesService } from '../../../AppServies/design-utilites.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit, OnDestroy {
  constructor(private _designUl: DesignUtilitesService) {}

  ngOnInit() {
    this._designUl.exclusive.next(true);
  }

  ngOnDestroy(): void {
    this._designUl.exclusive.next(false);
  }
}
