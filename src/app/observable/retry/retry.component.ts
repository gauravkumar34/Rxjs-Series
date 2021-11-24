import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css'],
})
export class RetryComponent implements OnInit {
  constructor(private http: HttpClient) {}
  items: any;
  fetching: boolean = false;
  status: string = 'fetch data';
  ngOnInit() {}
  fetchData() {
    this.fetching = true;
    this.http
      .get('https://fakestoreapi.com/products')
      .pipe(
        // retry(3)
        retryWhen((err) =>
          err.pipe(
            delay(3000),
            scan((retryCount) => {
              if (retryCount >= 5) {
                throw err;
              } else {
                retryCount = retryCount + 1;
                this.status = 'Attempt #' + retryCount;
                console.log(this.status);
                return retryCount;
              }
            }, 0)
          )
        )
      )
      .subscribe((res) => {
        this.items = res;
        this.fetching = false;
        this.status = 'Data is fetched';
      }),
      (err) => {
        console.log(err);
        this.fetching = false;
        this.status = 'Problem in connection';
      };
  }
}
