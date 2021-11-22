import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';
import { pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css'],
})
export class PluckComponent implements OnInit {
  constructor() {}

  users = [
    {
      name: 'Saurav',
      skills: 'Angular',
      job: { title: 'FrontEnd', exp: '10 years' },
    },
    {
      name: 'Gauarv',
      skills: 'JavaScript',
      job: { title: 'BackEnd', exp: '12 years' },
    },
    {
      name: 'Rajeev',
      skills: 'TypeScrpit',
      job: { title: 'FullStack', exp: '13 years' },
    },
    {
      name: 'Mohit',
      skills: 'RxJs',
      job: { title: 'Android', exp: '14 years' },
    },
    { name: 'Rohti', skills: 'Java', job: { title: 'Games', exp: '3 years' } },
    {
      name: 'Roushan',
      skills: 'Node',
      job: { title: 'BackEnd', exp: '6 years' },
    },
    {
      name: 'Rahul',
      skills: 'React',
      job: { title: 'FrontEnd', exp: '4 years' },
    },
  ];
  data;
  data2;
  ngOnInit() {
    //ex-01
    from(this.users)
      .pipe(
        // map((data) => data.name),
        pluck('name'),
        toArray()
      )
      .subscribe((res) => (this.data = res));

      //ex-02
      from(this.users)
      .pipe(
        // map((data) => data.name),
        pluck('job','title' ),
        toArray()
      )
      .subscribe((res) => (this.data2 = res));

  }
}
