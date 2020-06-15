import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'James', age: 24, job: 'Designer', employed: false },
    { name: 'Jill', age: 32, job: 'Astronaut', employed: true },
    { name: 'Mark', age: 22, job: 'Basketball player', employed: true }
  ];

  headers = [
    { key: 'name', label: 'Name'},
    { key: 'age', label: 'Age'},
    { key: 'job', label: 'Job'},
    { key: 'employed', label: 'Employed'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
