import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilitesService } from '../../../AppServies/design-utilites.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css'],
})
export class FromEventComponent implements OnInit, AfterViewInit {
  constructor(private _designUl: DesignUtilitesService) {}

  @ViewChild('addBtn') addBtn: ElementRef;
  @ViewChild('removeBtn') removeBtn: ElementRef;

  ngOnInit() {}
  ngAfterViewInit() {
    let count = 0;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      let result = 'video ' + count++;
      this._designUl.print(result, 'elContainer1');
      this._designUl.print(result, 'elContainer2');
    });
    fromEvent(this.removeBtn.nativeElement, 'click').subscribe((res) => {
      let ress = --count;
      if (count < 0) {
        count = 0;
      } else {
        this._designUl.remove('elContainer1', ress);
        this._designUl.remove('elContainer2', ress);
      }
    });
  }
}
