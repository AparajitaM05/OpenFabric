import { Component } from '@angular/core';
// import { MyService } from './my.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
  <div>{{ message }}</div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-project';

  message: any;
  constructor(private apiService: ApiService) { };
  ngOnInit() {
  }

}
