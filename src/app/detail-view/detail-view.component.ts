import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { repos } from '../repos';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent 
{
  repos!: repos;
  title = 'Angular Form Validation Tutorial';

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id']; // Access the 'id' parameter value
      console.log(id); // Log the 'id' value for debugging purposes

      this.apiService.getOneProducts(id).subscribe(
        (response) => {
          console.log('response received');
          this.repos = response;
          console.log(this.repos);
        },
        (error) => {
          console.error('Request failed with error');
        }
      );
    });
  }

  getOneProducts() {
    this.apiService.getOneProducts('1').subscribe(
      (response) => {
        console.log('response received');
        this.repos = response;
        console.log(response);
      },
      (error) => {
        console.error('Request failed with error');
      }
    );
  }

}
