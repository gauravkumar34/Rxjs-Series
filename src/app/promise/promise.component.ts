import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent implements OnInit {
  constructor() {}
  variable: any;
  dells = {
    brand: 'Dell',
    hardDisk: '2 tb',
    color: 'Black',
  };
  hps = {
    brand: 'HP',
    hardDisk: '1 tb',
    color: 'Red',
  };
  notAval = {
    brand: 'Not aval',
    status: 'failed',
  };
  dell() {
    return false;
  }
  hp() {
    return true;
  }
  ngOnInit() {
    let buyLabtop = new Promise((res, rej) => {
      // res('data resolve');
      // rej('data reject');
      if (this.dell()) {
        setTimeout(() => {
          res(this.dells);
        }, 3000);
      } else if (this.hp()) {
        setTimeout(() => {
          res(this.hps);
        });
      } else {
        rej(this.notAval);
      }
    });
    buyLabtop
      .then((res) => {
        this.variable = res;
        console.log(res);
      })
      .catch((res) => {
        this.variable = res;
        console.log(res);
      });
  }
}
