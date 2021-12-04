import { Component, OnInit } from '@angular/core';
import { DesignUtilitesService } from '../../../AppServies/design-utilites.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css'],
})
export class Comp3Component implements OnInit {
  constructor(private _designUl: DesignUtilitesService) {
    this._designUl.exclusive.next(true);
    this._designUl.userName.subscribe((res) => {
      this.userName = res;
    });
  }
  userName: String;
  ngOnInit() {}
  onChange(uname) {
    this._designUl.userName.next(uname.value);
    this.userName = uname.value;
    console.log(uname.value);
  }
}
