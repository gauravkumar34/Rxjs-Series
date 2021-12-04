import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DesignUtilitesService {
  exclusive = new Subject<boolean>();
  userName = new Subject<String>();
  constructor() {}


  print(res, containerID) {
    let el = document.createElement('li');
    el.innerText = res;
    document.getElementById(containerID).appendChild(el);
  }
  remove(containerID, count) {
    let el = document.getElementById(containerID);
    console.log(count);
    document.getElementById(containerID).removeChild(el.childNodes[count]);
  }
}
