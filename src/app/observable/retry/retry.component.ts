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
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.http
      .get('https://fakestoreapi.com/products')
      .subscribe((res) => (this.items = res));
  }
}
