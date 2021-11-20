import { Component, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable, Subscription } from 'rxjs';
import { DesignUtilitesService } from '../../../AppServies/design-utilites.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css'],
})
export class CustomComponent implements OnInit, OnDestroy {
  constructor(private _designUl: DesignUtilitesService) {}

  techStatus;
  techStatus2;
  nameStatus = 'Running';
  nameTesct;
  names;
  subs2: Subscription;
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
      }, 5000);
      setTimeout(() => {
        observer.next('JavaScript');
        // observer.error(new Error('Limit Excied'));
      }, 7000);
      setTimeout(() => {
        observer.next('TypeScrpit');
        observer.complete();
      }, 10000);
    });
    cusObs1.subscribe(
      (res) => {
        this._designUl.print(res, 'elContainer');
      },
      (err) => {
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = 'completed';
      }
    );
    //subscribe(data,error,completed)

    //Example 2 Custom interval
    const Arr2 = ['Angular', 'JavaScript', 'Html/Css', 'TypeScrpit'];
    const cusObs2 = Observable.create((observable) => {
      let count = 0;
      setInterval(() => {
        observable.next(Arr2[count]);
        if (count >= 3) {
          observable.error('Data emit error');
        }
        if (count >= 5) {
          observable.complete();
        }
        count++;
      }, 1000);
    });

    this.subs2 = cusObs2.subscribe(
      (res) => {
        this._designUl.print(res, 'elContainer2');
      },
      (err) => {
        this.techStatus2 = 'error';
      },
      () => {
        this.techStatus2 = 'completed';
      }
    );

    //Example 3 random names

    const Arr3 = ['Anup', 'Shekar', 'Sharma', 'UxTrands', 'Gaurav', 'Robort'];
    const cusObs3 = Observable.create((observable) => {
      let count = 0;
      setInterval(() => {
        observable.next(Arr3[count]);
        if (count >= 3) {
          // observable.error('Data emit error');
        }
        if (count >= 5) {
          observable.complete();
        }
        count++;
      }, 1000);
    });
    cusObs3.subscribe(
      (res) => {
        this.names = res;
      },
      (err) => {
        this.nameStatus = 'error';
      },
      () => {
        this.nameStatus = 'completed';
      }
    );
  }
  ngOnDestroy(): void {
    this.subs2.unsubscribe();
  }
}
