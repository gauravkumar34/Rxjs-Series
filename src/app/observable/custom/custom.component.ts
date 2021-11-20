import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DesignUtilitesService } from '../../../AppServies/design-utilites.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css'],
})
export class CustomComponent implements OnInit {
  constructor(private _designUl: DesignUtilitesService) {}

  ngOnInit() {
    //Example 1 Manual

    const cusObs1 = Observable.create((observer) => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);
      setTimeout(() => {
        observer.next('HTML');
      }, 3000);
      setTimeout(() => {
        observer.next('CSS');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('JavaScript');
      }, 7000);
      setTimeout(() => {
        observer.next('TypeScrpit');
        observer.error(new Error('Limit Excied'));
      }, 10000);
    });
    cusObs1.subscribe((res) => {
      this._designUl.print(res,'elContainer');
      console.log(res);
    });
  }
}
