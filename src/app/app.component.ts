import { Component, VERSION } from '@angular/core';
import { Location } from '@angular/common';
import { DesignUtilitesService } from '../AppServies/design-utilites.service';
import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  exclusive: boolean = false;
  constructor(
    private _location: Location,
    private _designUl: DesignUtilitesService
  ) {
    this._designUl.exclusive.subscribe((res) => {
      this.exclusive = res;
    });
  }
  backClicked() {
    this._location.back();
  }
}
