import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class LoadingBarService {
  private subject = new Subject();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart && this.keepAfterRouteChange) {
        this.keepAfterRouteChange = false;
        this.clear();
      }
    });
  }

  getLoadingBar(): Observable<any> {
    return this.subject.asObservable();
  }

  showBar(visible: boolean, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next(visible);
  }

  clear() {
    console.log('clear called');
    setTimeout(() => {
      console.log('Loading Bar cleared...');
    }, 2000);
  }
}
