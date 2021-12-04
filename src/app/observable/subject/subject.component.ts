import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilitesService } from '../../../AppServies/design-utilites.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit, OnDestroy {
  constructor(private _designUl: DesignUtilitesService) {}
  userName:String='Anup';
  ngOnInit() {
    this._designUl.exclusive.next(true);
    this._designUl.userName.subscribe(res => {
      this.userName = res;
    });
  }

  ngOnDestroy(): void {
    this._designUl.exclusive.next(false);
  }
}
