import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { repos } from './repos';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
@Injectable()
export class ProductsComponent {
  repos!: repos[];
  message: any;
  constructor(
    private apiService: ApiService,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit() {
    this.apiService.getAllProducts().subscribe((data) => {
      this.message = data;
    });

    this.getAllProducts();
  }

  getAllProducts() {
    this.apiService.getAllProducts().subscribe(
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

  jwtCheck(JWT: string): void {
    console.log(JWT);
    this.http.post('http://localhost:5000/CheckJWT', JWT).subscribe(
      (response) => {
        console.log(response);
        alert('Valid JWT');
      },
      (error) => {
        alert('JWT CHECK: Unauthorized');
        console.error('Invalid :', error);
      }
    );
  }

  editProduct(productId: string): void {
    console.log(productId);
    // alert(productId);
    this.repos = this.repos.filter((product: any) => product._id == productId);
    this.router.navigate(['/editproduct', productId]);
  }

  deleteProduct(productId: string): void {
    console.log(productId);
    console.log(this.repos);
    this.repos = this.repos.filter((product: any) => product._id !== productId);
    console.log(this.repos);

    this.http
      .delete(`http://localhost:5000/deleteproduct/${productId}`)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
