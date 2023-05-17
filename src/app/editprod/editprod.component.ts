import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { repos } from '../repos';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-editprod',
  templateUrl: './editprod.component.html',
  styleUrls: ['./editprod.component.css'],
})
export class EditprodComponent {
  repos!: repos;
  myForm: FormGroup = new FormGroup({});
  title = 'Angular Form Validation Tutorial';
  selectedFile: File | null = null;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.createForm();
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

  createForm() {
    this.route.params.subscribe((params) => {
      const id = params['id']; // Access the 'id' parameter value
      this.myForm = this.fb.group({
        id: [id, Validators.required],
        product_name: ['', Validators.required],
        image: [''],
        price: ['', Validators.required],
      });
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(): void {
    if (this.myForm.valid && this.selectedFile) {
      console.log(this.myForm.value);
      console.log(this.repos.image);

      this.http
        .put('http://localhost:5000/updateproduct', {
        id: this.myForm.value.id,
          product_name: this.myForm.value.product_name,
          price: this.myForm.value.price,
          image: this.selectedFile.name,
        })
        .subscribe((data) => {
          // Handle the response if needed
          alert('Product Edited');

          console.log(data);
          this.router.navigate(['/']);
        });
    } else {
      this.http
      .put('http://localhost:5000/updateproduct', {
        id: this.myForm.value.id,
        product_name: this.myForm.value.product_name,
        price: this.myForm.value.price,
        image: this.repos.image,
      })
      .subscribe((data) => {
        // Handle the response if needed
        alert('Product Edited');

        console.log(data);
        this.router.navigate(['/']);
      });

    }
  }
}
