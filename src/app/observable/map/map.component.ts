import { AfterViewInit, Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtilitesService } from '../../../AppServies/design-utilites.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor(private _designUl: DesignUtilitesService) {}

  sub1: Subscription;
  sub2: Subscription;
  mgs1: any;
  mgs2: any;
  mgs3: any;
  ngOnInit() {
    //Ex-1
    const broadCastVideo = interval(1000);

    this.sub1 = broadCastVideo
      .pipe(map((data) => 'Video ' + data))
      .subscribe((res) => {
        this.mgs1 = res;
      });
    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);

    //Ex-2
    this.sub2 = broadCastVideo
      .pipe(map((data) => 3 * data))
      .subscribe((res) => (this.mgs2 = res));

    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 10000);

    //Ex-03

    const members = from([
      { id: 1, name: 'Gaurav' },
      { id: 2, name: 'Saurav' },
      { id: 3, name: 'Ankit' },
      { id: 4, name: 'Rahul' },
      { id: 5, name: 'Jitendra' },
      { id: 6, name: 'Rajeev' },
      { id: 7, name: 'Rohit' },
      { id: 8, name: 'Shubham' },
    ]);

    members.pipe(map((data) => data.name)).subscribe((res) => {
      this._designUl.print(res, 'elContainer');
    });
  }
}
