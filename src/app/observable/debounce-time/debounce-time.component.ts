import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css'],
})
export class DebounceTimeComponent implements AfterViewInit {
  constructor(private loadingBar: LoadingBarService) {}

  @ViewChild('myInput') myInput: ElementRef;
  @ViewChild('myInput2') myInput2: ElementRef;
  data: any = null;
  data2: any = null;
  ngAfterViewInit() {
    //Example - 01
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup');
    searchTerm
      .pipe(
        map((event) => event.target.value),
        debounceTime(500)
      )
      .subscribe((res) => {
        this.data = res;
        console.log(this.data);
        this.loadingBar.start();
        setTimeout(() => {
          this.data = null;
          this.loadingBar.stop();
        }, 1000);
      });

    //Example - 02
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup');
    searchTerm2
      .pipe(
        map((event) => event.target.value),
        distinctUntilChanged()
      )
      .subscribe((res) => {
        this.data2 = res;
        console.log(this.data2);
        this.loadingBar.start();
        setTimeout(() => {
          this.data = null;
          this.loadingBar.stop();
        }, 1000);
      });
  }
}
