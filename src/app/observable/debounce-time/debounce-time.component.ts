import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css'],
})
export class DebounceTimeComponent implements AfterViewInit {
  constructor() {}

  @ViewChild('myInput') myInput: ElementRef;

  ngAfterViewInit() {
    const searchTerm = fromEvent(this.myInput.nativeElement, 'keyup');
    searchTerm.subscribe((res) => {
      console.log(res);
    });
  }
}
