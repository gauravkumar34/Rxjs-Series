import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';
import { LoadingBarService } from '../../../AppServies/loading-bar.service';
@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css'],
})
export class DebounceTimeComponent implements AfterViewInit {
  constructor(private loadingbar: LoadingBarService) {}

  @ViewChild('myInput') myInput: ElementRef;
  data: any = null;
  ngAfterViewInit() {
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup');
    searchTerm
      .pipe(
        map((event) => event.target.value),
        debounceTime(1000)
      )
      .subscribe((res) => {
        this.data = res;
        console.log(this.data);
        this.loadingbar.showBar(true);
        setTimeout(() => {
          this.data = null;
        this.loadingbar.showBar(false);
          
        }, 1000);
      });
  }
}
