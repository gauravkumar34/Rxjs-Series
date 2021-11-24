import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css'],
})
export class RetryComponent implements OnInit {
  constructor(private http: HttpClient) {}
  items: any;
  fetching: boolean = false;
  status: any;
  ngOnInit() {}
  fetchData() {
    this.http.get('https://fakestoreapi.com/products').subscribe((res) => {
      this.items = res;
      this.fetching = false;
      this.status = 'Data is fetch';
    }),
      (err) => {
        console.log(err);
        this.fetching = false;
        this.status = 'Errors';
      };
  }
}
