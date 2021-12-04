import { Component, ElementRef, OnInit } from '@angular/core';
import { DesignUtilitesService } from '../../../AppServies/design-utilites.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {

  userName:String;
  constructor(private _designUl: DesignUtilitesService) {
    this._designUl.exclusive.next(true);
    this._designUl.userName.subscribe((res) => {
      this.userName = res;
    });
  }
  ngOnInit() {}
  onChange(uname) {
    this._designUl.userName.next(uname.value);
    this.userName = uname.value;
    console.log(uname.value);
  }
}
